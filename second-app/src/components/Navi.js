import { React, useState } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default function Navi() {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <div>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle variant="success" id="dropdown-basic">
                    Pages
                </DropdownToggle>

                <DropdownMenu>
                    <DropdownItem href="/react">SHOP</DropdownItem>
                    <DropdownItem href="/react/crud">CRUD</DropdownItem>
                    <DropdownItem href="/react/post">POST</DropdownItem>
                    <DropdownItem href="/react/posts-list">POSTS LIST</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div >
    )
}
