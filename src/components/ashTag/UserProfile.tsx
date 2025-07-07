import { Link, useParams } from "react-router";
import LoginPrompt from "../LoginPrompt";
import CommentModal from "../modals/CommentModal";
import AshTagSidebar from "./AshTagSidebar";
import PostFeed from "./PostFeed";
import Widgets from "./Widgets";
import {
  ArrowLeftIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { getAuth, updateProfile } from "firebase/auth";
import { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  limit,
  writeBatch,
} from "firebase/firestore";
import { db } from "../../../firebase";

interface ProfileData {
  name: string;
  username: string;
  photoURL?: string;
  bio?: string;
}

export default function UserProfile() {
  const { username: profileUsername } = useParams<{ username: string }>();
  const currentUser = useSelector((state: RootState) => state.user);
  const auth = getAuth();
  const user = auth.currentUser;

  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Check if this is the current user's own profile
  const isOwnProfile = currentUser.username === profileUsername;

  useEffect(() => {
    async function fetchProfileData() {
      if (!profileUsername) {
        setError("Username not found");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);

        const postsQuery = query(
          collection(db, "posts"),
          where("username", "==", profileUsername),
          limit(1),
        );

        const querySnapshot = await getDocs(postsQuery);

        if (!querySnapshot.empty) {
          const firstPost = querySnapshot.docs[0].data();
          setProfileData({
            name: firstPost.name,
            username: firstPost.username,
            photoURL: firstPost.photoURL,
            bio: firstPost.bio,
          });
        } else {
          setError("User not found");
        }
      } catch (err) {
        console.error("Error fetching profile data:", err);
        setError("Failed to load profile");
      } finally {
        setLoading(false);
      }
    }

    fetchProfileData();
  }, [profileUsername]);

  const handleBioClick = async () => {
    if (user && isOwnProfile) {
      try {
        const newBio = prompt("Enter your new bio:");

        if (!newBio || newBio.trim() === "") {
          console.log("Bio update cancelled");
          return;
        }

        // Find all posts by this user
        const postsQuery = query(
          collection(db, "posts"),
          where("username", "==", currentUser.username),
        );

        const querySnapshot = await getDocs(postsQuery);

        if (!querySnapshot.empty) {
          const batch = writeBatch(db);

          querySnapshot.docs.forEach((docRef) => {
            batch.update(docRef.ref, {
              bio: newBio,
            });
          });

          await batch.commit();

          console.log("Bio updated in posts!");
        }

        // Update local state
        setProfileData((prev) => (prev ? { ...prev, bio: newBio } : null));
      } catch (error) {
        console.error("Error updating bio:", error);
      }
    }
  };

  const handleProfilePictureClick = async () => {
    if (user && isOwnProfile) {
      try {
        const newPhotoURL = prompt(
          "Enter the URL for your new profile picture:",
        );

        if (!newPhotoURL || newPhotoURL.trim() === "") {
          console.log("Profile picture update cancelled");
          return;
        }

        try {
          new URL(newPhotoURL);
        } catch (e) {
          alert("Please enter a valid URL");
          return;
        }

        await updateProfile(user, {
          photoURL: newPhotoURL,
        });

        const postsQuery = query(
          collection(db, "posts"),
          where("username", "==", currentUser.username),
        );

        const querySnapshot = await getDocs(postsQuery);

        if (!querySnapshot.empty) {
          const batch = writeBatch(db);

          querySnapshot.docs.forEach((docRef) => {
            batch.update(docRef.ref, {
              photoURL: newPhotoURL,
            });
          });

          await batch.commit();

          setProfileData((prev) =>
            prev ? { ...prev, photoURL: newPhotoURL } : null,
          );
        }

        console.log("Profile picture updated successfully!");
      } catch (error) {
        console.error("Error updating profile picture:", error);
      }
    }
  };

  if (loading) {
    return (
      <div className="mx-auto flex min-h-screen max-w-[1400px] justify-center text-white">
        <AshTagSidebar />
        <div className="max-w-2xl flex-grow border-x border-[#696765]">
          <div className="flex items-center justify-center p-8">
            <span>Loading profile...</span>
          </div>
        </div>
        <Widgets />
      </div>
    );
  }

  if (error || !profileData) {
    return (
      <div className="mx-auto flex min-h-screen max-w-[1400px] justify-center text-white">
        <AshTagSidebar />
        <div className="max-w-2xl flex-grow border-x border-[#696765]">
          <div className="flex items-center justify-center p-8">
            <span className="text-red-400">{error || "Profile not found"}</span>
          </div>
        </div>
        <Widgets />
      </div>
    );
  }

  return (
    <>
      <div className="mx-auto flex min-h-screen max-w-[1400px] justify-center text-white">
        <AshTagSidebar />
        <div className="max-w-2xl flex-grow border-x border-[#696765]">
          <div className="sticky top-0 z-50 flex items-center border-b border-[#696765] bg-[#0a0a0a] px-3 py-4 font-[Aoboshi] backdrop-blur-sm">
            <Link to="/ashtag">
              <ArrowLeftIcon className="mr-5 flex h-5 w-5 cursor-pointer transition hover:text-amber-600" />
            </Link>
            <div className="flex flex-col">
              <span className="text-lg">{profileData.name}</span>
              <span className="text-gray-400">@{profileData.username}</span>
            </div>
          </div>
          <div className="relative">
            <div className="h-[200px] overflow-hidden md:h-[250px]">
              <img
                src="https://i.imgur.com/dZpF0Wo.png"
                alt="Profile Banner"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div
              className={`absolute bottom-0 left-4 translate-y-1/2 ${
                isOwnProfile ? "cursor-pointer" : "cursor-default"
              }`}
              onClick={handleProfilePictureClick}
            >
              <img
                src={profileData.photoURL || "/assets/User.png"}
                className="h-35 w-35 rounded-full border-4 border-[#0a0a0a] object-cover object-center"
                alt="Profile Picture"
              />
            </div>
          </div>
          <div className="flex justify-between px-3 pt-20">
            <div className="flex flex-col">
              <span className="text-lg">{profileData.name}</span>
              <span className="text-gray-400">@{profileData.username}</span>
            </div>
            {isOwnProfile && (
              <EllipsisHorizontalCircleIcon
                className="h-8 w-8 cursor-pointer transition hover:text-amber-600"
                onClick={handleBioClick}
              />
            )}
          </div>
          <div className="px-3 pt-5">
            <span>{profileData.bio}</span>
          </div>
          <PostFeed />
        </div>
        <Widgets />
      </div>

      <CommentModal />
      <LoginPrompt />
    </>
  );
}
