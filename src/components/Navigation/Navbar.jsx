import React from 'react';
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer';

const Navbar = () => {
    return (
        <div>
            {/* <AppBar title="Labbka"/> */}
            <Drawer width={200} openSecondary={true} open={true} >
                <AppBar title="AppBar" />
            </Drawer>
        </div>
    );
}

export default Navbar;
