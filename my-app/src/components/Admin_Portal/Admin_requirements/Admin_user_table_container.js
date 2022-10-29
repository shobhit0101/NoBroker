import "../Admin_CSS/Admin_home.css"
import { Link } from "react-router-dom";

const AdminUserTableContainer = () => {
    return (
        <>
            <div className="AdminUserTableContainer">
                <div className="row user_table_row">

                    <div className="col-2">
                        <p className="p_class" >Id</p>
                    </div>
                    <div className="col-2">
                        <p className="p_class" >Username</p>
                    </div>
                    <div className="col-4">
                        <p className="p_class" >Email</p>
                    </div>
                    <div className="col-2">
                        <p className="p_class" >Phone no</p>
                    </div>
                    <div className="col-2">
                        <p className="p_class trash_button" ><Link href=""><i class="fa fa-trash trash_css"></i></Link></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminUserTableContainer; 