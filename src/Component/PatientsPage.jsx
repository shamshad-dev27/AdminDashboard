import HomeLayout from "../Layout/HomeLayout";
import Patients from "./PatientDetail/Patients";


function PatientsPage() {
    return (
        <HomeLayout>
            <div className="absolute top-30 m-4">
                <Patients />
            </div>
        </HomeLayout>
    );
}

export default PatientsPage;