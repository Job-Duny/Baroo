import { Item, UserPf } from "./ModulesForm"


export const Home = () => {

  const list = ( document.querySelectorAll('.list'));
  function activeLink() {
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active')
  }
  list.forEach((item) =>
  item.addEventListener('click', activeLink));

  return (
    <>
    <div className="home-body">
      <div className="NavBarr">
        <ul>
          <Item secc={'Config'} icons={'fa-solid fa-bars'} sel={'list'}/>
          <Item secc={'Cartera'} icons={'fa-solid fa-wallet'} sel={'list'}/>
          <Item secc={'Home'} icons={'fa-solid fa-house'} sel={'list active'}/>
          <Item secc={'Graficas'} icons={'fa-solid fa-chart-simple'} sel={'list'}/>
          <Item secc={'Notas'} icons={'fa-solid fa-bell'} sel={'list'}/>
        </ul>
      </div>
      <div className="Balance">
        <UserPf></UserPf>
        <div className="BalanceDisp">
          <div className="BalanceCant">
            
          </div>
          <div className="BalanceMenu">
            <Item secc={'gasto'} icons={'fa-solid fa-arrow-right-to-bracket'}/>
            <Item secc={'ingreso'} icons={'fa-regular fa-square-caret-down'}/>
            <Item secc={'mas'} icons={'fa-solid fa-ellipsis'}/>
          </div>
        </div>
      </div>
      <div className="GasRec">
      
      </div>
    </div>
  </>
  )
}
