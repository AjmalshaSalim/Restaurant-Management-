import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Typography } from '@material-tailwind/react';

const ErrorPage = ({error}) => {
    const [errorMessage,setErrorMessage] =useState( error);

    return (
        <div className="flex items-center justify-center h-screen">
            <Card className="w-96">
                <CardHeader className="bg-red-500">
                    <Typography variant="h6" color="white">
                        404 - Page Not Found
                    </Typography>
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="body1">
                        {errorMessage}
                    </Typography>
                </CardBody>
            </Card>
        </div>
    );
};

export default ErrorPage;
