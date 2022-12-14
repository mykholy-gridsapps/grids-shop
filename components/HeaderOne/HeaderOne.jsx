
import { Box } from '@mui/system'
import MiddleHeader from './MiddleHeader'
import TopHeader from './TopHeader'
const HeaderOne = () => {
    return (
        <Box component='header'>
            <TopHeader />
            <MiddleHeader />
        </Box>
    )
}

export default HeaderOne