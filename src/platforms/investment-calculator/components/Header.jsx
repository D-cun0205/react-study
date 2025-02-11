import logo from '../assets/investment-calculator-logo.png';

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="Logo showing a money" />
      <h2>Investor Calculator</h2>
    </header>
  )
}