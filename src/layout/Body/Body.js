import './Body.css';
import '../../App.css'; // CSS General a toda la app

function Body({children}) {
  return (
    <div className="Body">
      {children}
    </div>
  );
}

export default Body;
