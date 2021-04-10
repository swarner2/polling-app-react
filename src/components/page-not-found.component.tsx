import { Card, CardHeader } from '@material-ui/core';
import React from 'react';



export function PageNotFound(){
    return (
      <div>
        <Card raised={true}>             
          <CardHeader title="404 Page Not Found" ></CardHeader>
        </Card>    
      </div>
    );
  }
