import profile1 from '../images/profile/profile1.jpg'
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolIcon from '@mui/icons-material/School';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Divider from '@mui/material/Divider';

function About(){
    return(
        <div>
            <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={4}
            >
                
                <img 
                    src={profile1} 
                    width={'200px'} 
                    height={'300px'} 
                    alt = "profile pic"
                />
                
                <Stack direction="column" spacing={1} alignItems={'center'}>
                    <h1>Hello and Welcome!</h1>
                    <p>This is Yuexuan Li.</p>
                    <p>Building in progress...</p>
                    <Stack direction="row" spacing={1} alignItems={'center'}>
                    
                        <IconButton 
                            size='large' 
                            aria-label="Google Scholar"
                            href = 'https://scholar.google.com/citations?user=Mqp--bgAAAAJ&hl=en&oi=ao'
                            target="_blank"
                            sx={{ color: 'white' }}
                        >
                            <SchoolIcon />
                        </IconButton>
                        <IconButton 
                            size='large' 
                            aria-label="LinkedIn"
                            href = 'https://www.linkedin.com/in/yuexuan-li-ph-d-b218a0155/'
                            target="_blank"
                            sx={{ color: 'white' }}
                        >
                            <LinkedInIcon />
                        </IconButton> 
                        
                    </Stack>
                </Stack>
            </Stack>   
        </div>
    )
}

export default About;