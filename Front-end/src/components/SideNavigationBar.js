import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import '../styles/SideNavigation.scss';
import SearchModal from './SearchSong'; // Import the SearchModal
const SideNavigation = () => {
    const [isMenuActive, setIsMenuActive] = useState(false); // Controls the visibility of the side nav
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Toggles the menu visibility
    const handleToggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };
    // Opens the search modal
    const handleSearchClick = () => {
        setIsModalOpen(true);
    };
    // Closes the search modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "side-nav-bar__logo", onClick: handleToggleMenu, children: _jsx("i", { className: "fas fa-sliders" }) }), _jsx("div", { className: "side-nav-bar__search-link", onClick: () => {
                    handleSearchClick();
                    handleToggleMenu();
                }, children: _jsx("i", { className: "fas fa-magnifying-glass" }) }), _jsx("div", { className: `side-nav-bar ${isMenuActive ? 'active' : 'hidden'}`, children: _jsxs("div", { className: "side-nav-bar__icon", children: [_jsxs("div", { className: "side-nav-bar__admin-control", children: [_jsx("i", { className: "fas fa-house" }), _jsx("i", { className: "fas fa-user-plus" }), _jsx("i", { className: "fas fa-magnifying-glass", onClick: () => {
                                        handleSearchClick();
                                        handleToggleMenu();
                                    } }), _jsx("i", { className: "fas fa-heart-circle-xmark" })] }), _jsx("br", {}), _jsxs("div", { className: "side-nav-bar__media-control", children: [_jsx("i", { className: "fas fa-circle-pause" }), _jsx("i", { className: "fas fa-forward-step" })] }), _jsx("span", { className: "side-nav-bar__logout", children: _jsx("i", { className: "fas fa-arrow-right-from-bracket" }) })] }) }), _jsx(SearchModal, { isOpen: isModalOpen, onClose: handleCloseModal })] }));
};
export default SideNavigation;