/* eslint-disable perfectionist/sort-imports */
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { RouterLink } from 'src/routes/components';

import Logo from 'src/components/logo';

export default function NotFoundView({ custom = false, failure = false, data }) {
  const renderHeader = (
    <Box
      component="header"
      sx={{
        top: 0,
        left: 0,
        width: 1,
        lineHeight: 0,
        position: 'fixed',
        p: (theme) => ({ xs: theme.spacing(3, 3, 0), sm: theme.spacing(5, 5, 0) }),
      }}
    >
      <Logo />
    </Box>
  );

  let content;
  if (custom) {
    content = (
      <Container>
        <Box
          sx={{
            py: 12,
            maxWidth: 480,
            mx: 'auto',
            display: 'flex',
            minHeight: '100vh',
            textAlign: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
           <Typography variant="h3" sx={{ mb: 3 }}>
            Sorry, No record found!
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Sorry, we couldn’t find the {data} you&lsquo;re looking for.
          </Typography>

          <Box
            component="img"
            src="/assets/illustrations/illustration_404.svg"
            sx={{
              mx: 'auto',
              height: 260,
              my: { xs: 5, sm: 10 },
            }}
          />
        </Box>
      </Container>
    );
  } else if (failure) {
    content = (
      <Container>
        <Box
          sx={{
            py: 12,
            maxWidth: 480,
            mx: 'auto',
            display: 'flex',
            minHeight: '100vh',
            textAlign: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
            <Typography variant="h3" sx={{ mb: 3 }}>
            Oops! Something Went Wrong.
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            We&apos;re sorry, but it looks like there was an issue with our server while fetching the data.
            Please try again later.
          </Typography>

          <Box
            component="img"
            src="/assets/illustrations/illustration_404.svg"
            sx={{
              mx: 'auto',
              height: 260,
              my: { xs: 5, sm: 10 },
            }}
          />
        </Box>
      </Container>
    );
  } else {
    content = (
      <Container>
        <Box
          sx={{
            py: 12,
            maxWidth: 480,
            mx: 'auto',
            display: 'flex',
            minHeight: '100vh',
            textAlign: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
           <Typography variant="h3" sx={{ mb: 3 }}>
            Sorry, page not found!
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Sorry, we couldn&lsquo;t find the page you&rsquo;re looking for. Perhaps you&rsquo;ve mistyped the URL? Be sure to check your spelling.
          </Typography>
          <Box
            component="img"
            src="/assets/illustrations/illustration_404.svg"
            sx={{
              mx: 'auto',
              height: 260,
              my: { xs: 5, sm: 10 },
            }}
          />

          <Button href="/" size="large" variant="contained" component={RouterLink}>
            Go to Home
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <>
      {renderHeader}
      {content}
    </>
  );
}

NotFoundView.propTypes = {
  custom: PropTypes.bool,
  failure: PropTypes.bool,
  data: PropTypes.any,
};
