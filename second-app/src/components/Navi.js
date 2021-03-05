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
                    <DropdownItem href="/">SHOP</DropdownItem>
                    <DropdownItem href="/crud">CRUD</DropdownItem>
                    <DropdownItem href="/post">POST</DropdownItem>
                    <DropdownItem href="/posts-list">POSTS LIST</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div >
    )
}
