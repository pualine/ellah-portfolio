import DbNavbar from "../../../components/dashboardcomponents/db_navbar";
import DBblogs from "../../../components/dashboardcomponents/db_blog";
import DbSkills from "../../../components/dashboardcomponents/db_skills";
import DbAwards from "../../../components/dashboardcomponents/db_achievements";
import DbAchievement from "../../../components/dashboardcomponents/db_achievements";
import DbProjects from "../../../components/dashboardcomponents/db_projects";
import db_bkg from "../../../assets/db_background.jpg";


export default function Dashboard() {
    return (
        <section className="h-screen bg-cover bg-center"
        style={{backgroundImage:`url(${db_bkg})`}}>
            <DbNavbar />

            <div className="flex flex-col md:flex-row">

                {/* lists section */}
                <div className="flex-1 p-4">
                    <div className="grid grid-cols-1 mt-8">
                        {/* skills section */}
                        <DbSkills />

                        {/* awards section */}
                        {/* <DbAwards /> */}

                        {/* achievements section */}
                        <DbAchievement />

                        {/* projects section */}
                        <DbProjects/>
                    </div>
                </div>
                {/* blog */}
                <DBblogs />
            </div>


        </section>

    );
};