// Assets
import './styles.css'
import { BiChalkboard } from "react-icons/bi";

export default function StageLink(props) {
    return (
        <div className="containerStageLink">
            <div className="contentStageLink">
                <button>
                    <div className="leftStageLink">
                        <BiChalkboard size={80} color="#e02041" />
                        <h1>{props.name}</h1>
                    </div>
                    <h1>400 xp</h1>
                </button>
            </div>
        </div>
    )
}