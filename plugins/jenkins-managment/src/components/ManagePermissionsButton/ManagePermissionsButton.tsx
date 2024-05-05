import { Button, Link } from '@backstage/core-components';
import { Box } from '@material-ui/core';
import React from 'react';
import {Lock} from '@material-ui/icons'
import { useRouteRef } from '@backstage/core-plugin-api';
import { permissionRouteRef } from '../../plugin';

export const ManagePermissionsButton = () => {
  const permissionsRouteRef = useRouteRef(permissionRouteRef);

  return (
    <Box display="flex" justifyContent="flex-end">
      <Button 
        variant="contained" 
        color="primary" 
        endIcon={<Lock fontSize="small" />}
        component={Link} 
        to={permissionsRouteRef()}
      >
        Manage Permissions
      </Button>
    </Box>
  );
};


