import React, {useState} from "react";
import '../../../css/common/Style.css'
import styles from '../../../css/auth/find-account/FindBox.module.css'

import FindId from './FindId'
import FindPw from './FindPw'
import ShowId from "./ShowId";
import ShowPw from './ShowPw'

function FindBox(){
    const [ scope, setScope ] = useState(true);
    const [ showId, setShowId ] = useState(false);
    const [ showPw, setShowPw ] = useState(false);

    return(
        <div className={styles['box']}>
            { showId ? <ShowId/> : showPw ? <ShowPw/> : 
                scope ? <FindId scope={scope} setScope={setScope} setShowId={setShowId}/> : 
                <FindPw scope={scope} setScope={setScope} setShowPw={setShowPw}/>}
        </div>
    )
}

export default FindBox;