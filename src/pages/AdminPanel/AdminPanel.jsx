import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import Items from "../Items/Items";

function AdminPanel() {

    return (
        <div className="mt-3">
            <Container>
                <Link to="/admin/create" className="font-mono bg-green-700 rounded py-1 px-2">Create +</Link>
            </Container>
            <Items />
        </div>
    )
}

export default AdminPanel;