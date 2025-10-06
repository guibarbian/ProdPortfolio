import HeaderList from './components/HeaderList'
import HeaderListItem from './components/HeaderListItem'
import Link from '../LinkComponent/Link'
import Logo from '../Logo/Logo'

const Header = () => {
  return (
    <HeaderList>
        <HeaderListItem><a href="#home"><Logo size='small' /></a></HeaderListItem>
        <HeaderListItem><Link href='#home' type='HeaderLink' text='Home' /></HeaderListItem>
        <HeaderListItem><Link href='#sobre' type='HeaderLink' text='Sobre'/></HeaderListItem>
        <HeaderListItem><Link href='#portfolio' type='HeaderLink' text='Portfolio'/></HeaderListItem>
        <HeaderListItem><Link href='#servicos' type='HeaderLink' text='Serviços'/></HeaderListItem>
        <HeaderListItem><Link href='#contato' type='HeaderLink' text='Contato'/></HeaderListItem>
    </HeaderList>
  )
}

export default Header