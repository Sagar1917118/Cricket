import PlayerCard from "./PlayerCard";
import player1 from "../assets/virat-kholi.png";
import player2 from "../assets/maxwell.png";
import player3 from "../assets/trent_bolt.png";
import bg1 from "../assets/blue_bg.png";
import bg2 from "../assets/black_bg.png";
import bg3 from "../assets/yellow_bg.png";
import "./landing_page.css";
function LandingPage(){
    return(
        <div className="landing_page">
           <PlayerCard
            playerName="Virat Kholi"
            playerRole="BatsMan"
            sixes={10}
            fours={14}
            runs={1200}
            playerImage={player1}
            backgroundShades={bg1}
            test={"100"}
            t20={"201"}
            odi={"300"}
        />
        <PlayerCard
            playerName="Maxwell"
            playerRole="BatsMan"
            sixes={10}
            fours={14}
            runs={1200}
            playerImage={player2}
            backgroundShades={bg3}
            test={"250"}
            t20={"304"}
            odi={"506"}
        />
        <PlayerCard
            playerName="Trent Bolt"
            playerRole="BatsMan"
            sixes={10}
            fours={14}
            runs={1200}
            playerImage={player3}
            backgroundShades={bg2}
            test={"225"}
            t20={"189"}
            odi={"456"}
        />
        </div>
        
    )
}
export default LandingPage;