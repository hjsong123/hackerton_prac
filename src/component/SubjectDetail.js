import { useEffect, useState } from "react";
import MainHeader from "./MainHeader";
import MainLeft from "./MainLeft";
import { useParams } from 'react-router-dom';

function SubjectDetail() {
    const [subjectName, setSubjectName] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchSubjects = () => {
            const dummyData = [
                { id: 1, name: '운영체제' },
                { id: 2, name: '서양철학' },
                { id: 3, name: '동양사상' },
                { id: 4, name: '프로그래밍 및 실습' }
            ];
            setSubjectName(dummyData);
        };

        fetchSubjects();
    }, []);

    const topics = [
        "주제 1: 플라톤의 이데아론",
        "주제 2: 아리스토텔레스의 윤리학",
        "주제 3: 칸트의 도덕철학",
        "주제 4: 헤겔의 변증법",
    ];

    

    return (
        <div className="subject-detail">
            <MainLeft />
            <div className="subject-detail-right">
                <MainHeader />
                <div className="subject-detail-middle">
                    <h2 className="subject-detail-title">{subjectName[id - 1]?.name}</h2>
                    <div className="subject-detail-content">
                        <ul className="subject-detail-topics">
                            {topics.map((topic, index) => (
                                <li key={index} className="subject-detail-topic-item">{topic}
                                <button className="subject-detail-topic-button">제출하기</button></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubjectDetail;
