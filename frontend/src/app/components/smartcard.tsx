import SmartCard1 from "./smarcards/smardcard1";
import SmartCard2 from "./smarcards/smartcard2";

export default function SmartCard(){
    return(
        <div className="flex">
            <SmartCard1></SmartCard1>
            <SmartCard2/>
        </div>
    )
}