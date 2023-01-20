import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import f1 from './firstapp/src/components/images/f1.jpg'
export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      
     
      <Avatar
        alt="Remy Sharp"
        src="firstapp\src\components\images\f1.jpg"
        sx={{ width: 56, height: 56 }}
      />
    </Stack>
  );
}
