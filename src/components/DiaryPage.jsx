import { useState ,useEffect} from "react";
import AddDiary from "./AddDiary.jsx";
const DiaryPage=()=>{
    const [addDiary,setAddDiary]=useState([{
        Image: "https://static.giga.de/wp-content/uploads/2018/12/Google-logo-G-icon-symbol-2021-rcm1680x944u.jpg",
            title: "Google",
            content: "beste freund",
            date: "22.02.2022",
    }]);
    const [showDiary, setShowDiary] = useState(false);
    
    let diaries = JSON.parse(localStorage.getItem("diaries")) || [];
    useEffect(() => {
        
        function showDiaries() {
             diaries = JSON.parse(localStorage.getItem("diaries")) || [];
            }showDiaries();
    },[addDiary,showDiary]);
    
    return (
            
            <div className="drawer flex flex-col">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle"/>
                
                <div className="drawer-content flex flex-col items-center justify-center">
                    <h1 className="text-5xl font-extrabold">Diary Page</h1>
                    
                        {diaries.map((diary) => (
                            <div key={diary.date} className="m-4">
                                <div className="card card-compact bg-base-100 w-96 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                        src={diary.Image}
                                        alt={diary.title}
                                        className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{diary.title}</h2>
                                        <h4>{diary.date}</h4>
                                        <div className="collapse bg-green-500">
                                            <input type="checkbox" />
                                            <div className="collapse-title text-xl bg-green font-medium ">kontent -/+</div>
                                            <div className="collapse-content bg-yellow peer-checked:text-secondary-content" >
                                                {diary.content}
                                            </div>
                                        </div>
                                        <div className="card-actions justify-end">
                                             <button className="btn bg-red-600">löschen</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button self-center">hinzufügen</label>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        <AddDiary addDiary={addDiary} setAddDiary={setAddDiary}/>
                        </ul>
                </div>
            </div>
        
    )
}

export default DiaryPage;