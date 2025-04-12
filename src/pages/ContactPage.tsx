import { useState } from "react";
import LabeledSelect from "../components/LabelSelect"
import ProfileCard from "../components/ContactInfo";
import { departments, issueSelect, regionSelect } from "../utils/State";

export const ContactPage = () => {
    const [selectedLevel, setSelectedLevel] = useState<string>("");
    const [selectedRegion, setSelectedRegion] = useState<string>("");
    const [selectedIssue, setSelectedIssue] = useState<string>("");
    const [selectedMinistry, setSelectedMinistry] = useState<string>("");

    return (
        <div className="contact-page">
            <section className="contact">
                <div className="header">
                    <h1>Contact Government Officials</h1>
                    <p>Connect directly with elected representatives and public servants across all levels of Nigerian government.</p>
                </div>
            </section>

            <section className="contact-details">
                <div className="form">
                    <LabeledSelect
                        label="Government Level"
                        disabledOption="State"
                        options={["State", "Federal", "Local"]}
                        value={selectedLevel}
                        onChange={setSelectedLevel}
                    />
                    <LabeledSelect
                        label="State/Region"
                        disabledOption="Independence Layout, Enugu"
                        options={regionSelect}
                        value={selectedRegion}
                        onChange={setSelectedRegion}
                    />
                    <LabeledSelect
                        label="Issue"
                        disabledOption="Electricity and Power"
                        options={issueSelect}
                        value={selectedIssue}
                        onChange={setSelectedIssue}
                    />
                    <LabeledSelect
                        label="Ministry/ Department"
                        disabledOption="Ministry or Electrical Power"
                        options={departments}
                        value={selectedMinistry}
                        onChange={setSelectedMinistry}
                    />
                </div>
                <div className="official-search">
                    <button className="search-officials">Search Officials</button>
                </div>
            </section>

            <section className="contact-info">
                <div className="contact-img">
                    <h1>Electricity and Power, Lagos Officials.</h1>
                </div>
                <div className="contact-list">
                    <ProfileCard
                        image={""}
                        name="Jane Doe"
                        title="Software Engineer"
                        data={{
                            Location: "Lagos",
                            Department: "Engineering",
                            Joined: "2022"
                        }}
                    />
                    <ProfileCard
                        image={""}
                        name="Jane Doe"
                        title="Software Engineer"
                        data={{
                            Location: "Lagos",
                            Department: "Engineering",
                            Joined: "2022"
                        }}
                    />
                    <ProfileCard
                        image={""}
                        name="Jane Doe"
                        title="Software Engineer"
                        data={{
                            Location: "Lagos",
                            Department: "Engineering",
                            Joined: "2022"
                        }}
                    />
                    <ProfileCard
                        image={""}
                        name="Jane Doe"
                        title="Software Engineer"
                        data={{
                            Location: "Lagos",
                            Department: "Engineering",
                            Joined: "2022"
                        }}
                    />
                    <ProfileCard
                        image={""}
                        name="Jane Doe"
                        title="Software Engineer"
                        data={{
                            Location: "Lagos",
                            Department: "Engineering",
                            Joined: "2022"
                        }}
                    />
                    <ProfileCard
                        image={""}
                        name="Jane Doe"
                        title="Software Engineer"
                        data={{
                            Location: "Lagos",
                            Department: "Engineering",
                            Joined: "2022"
                        }}
                    />
                </div>
                <div className="pagination">

                </div>
            </section>
        </div>
    )
}