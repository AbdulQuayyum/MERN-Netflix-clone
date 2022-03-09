import { Visibility } from "@material-ui/icons";
import "./widgetSm.css"

export default function WidgetSm() {
   
    return (
        <div className="widgetSm">
          <span className="widgetSmTitle">New Join Members</span>
          <ul className="widgetSmList">
              <li className="widgetSmListItem">
              <img src="https://media-exp1.licdn.com/dms/image/C5603AQHguWnYXDlslw/profile-displayphoto-shrink_800_800/0/1642283387726?e=1652313600&v=beta&t=S0zeDpgq2eHEuslAphMQHmmDOu139z2o-bAeaqP-8lk" 
              alt=""
              className="widgetSmImg"
              />
                <div className="widgetSmUser">
                  <span className="widgetSmUsername">Alao Abdul-Quayyum</span>
                  <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                  <Visibility className="widgetSmIcon" />
                  Display
                </button>
              </li>
          </ul>
        </div>
      );
}
