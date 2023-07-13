import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import { QrCode } from '@mui/icons-material'
import s from './Header.module.scss'

export interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return (
    <div className={s.container}>
      <AppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <QrCode sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='/'
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              QR
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

export default Header
