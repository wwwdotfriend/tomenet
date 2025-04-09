import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

function MenuButton() {
    return (
        <button className="group relative inline-flex h-13 w-13 items-center justify-center rounded-[100%] bg-[#FBF5F1] transition-colors hover:bg-[#782F40]">
            <div>
                <FontAwesomeIcon 
                    icon={faBars} 
                    className="text-[#782F40] transition-colors duration-300 group-hover:text-[#FBF5F1]"
                />
            </div>
        </button>
    );
}

export default MenuButton;

