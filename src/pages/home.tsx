import { Stack } from '@mui/material';


function Home(){
    return(
        <div>
            <h1>Welcome</h1>
            <Stack direction="row" spacing={1} alignItems={'center'}>
                <p>This is the personal website for Yuexuan!</p>
            </Stack>
        </div>
    )
}

export default Home;