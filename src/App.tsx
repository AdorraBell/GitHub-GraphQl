import { FC, useEffect } from "react";
import "src/App.css";
import { useActions } from "src/hooks/useActions";
import AppRouter from "src/components/AppRouter/AppRouter";

const App: FC = () => {

   const searchedLineInSession = sessionStorage.getItem('searchedLine') || '';
   const currentCursorInSession = sessionStorage.getItem('currentCursor') || '';
   const pageIdInSession = sessionStorage.getItem(('pageId') || '');
   const cursorsListInSession = JSON.parse(sessionStorage.getItem(('cursorsList')) || '[]');

   const {setInfo, setCursor} = useActions();

   useEffect(() => {
      setInfo(searchedLineInSession, cursorsListInSession, cursorsListInSession[Number(pageIdInSession)]);
      setCursor({currentCursor: currentCursorInSession});
   }, [searchedLineInSession, pageIdInSession, cursorsListInSession])

  return ( 
      <AppRouter />
   );
}
 
export default App;