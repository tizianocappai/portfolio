import React from "react";
import './styles.scss';

const MySkill = () => {
    return (
        <section className={"container my-skill-section"}>
            <h3 className={'my-skill-section__title'}>My Skill</h3>
        </section>
    )
}

export default React.memo(MySkill);
