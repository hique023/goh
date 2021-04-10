// Assets
import './styles.css'

export default function StageLink(props) {
    return (
        <div className="containerStageLink">
            <div className="contentStageLink">
                <h1>{props.name}</h1>
                <h1>400 xp</h1>
            </div>
        </div>
    )
}