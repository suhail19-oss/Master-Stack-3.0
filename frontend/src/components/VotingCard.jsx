import { Card, CardContent, Typography, Chip } from '@mui/material';

const VotingCard = ({ content }) => (
  <Card sx={{ marginBottom: 2, transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
    <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant="body1">{content}</Typography>
      <Chip label="Ongoing" color="primary" />
    </CardContent>
  </Card>
);

export default VotingCard;
