```
import { useHistory } from 'react-router-dom';

let history = useHistory();

<button className="btn btn-danger" onClick={()=>{
                history.goBack();
            }}>뒤로가기</button> 

```
