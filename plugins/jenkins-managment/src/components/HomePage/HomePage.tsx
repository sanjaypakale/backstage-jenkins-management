import React, { useState, useEffect } from 'react';
import { Page, Header, Content } from '@backstage/core-components';
import { Table } from '@backstage/core-components';

import { Lock, Replay, Visibility, Settings } from '@material-ui/icons'
import { useApi } from '@backstage/core-plugin-api';
import { Box, Button, Icon, Typography } from '@material-ui/core';
import JenkinsLogo from '../../assets/JenkinsLogo.svg'
import { ManagePermissionsButton } from '../ManagePermissionsButton';

export const HomePage = () => {
    const [jobData, setJobData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // Example API endpoint for fetching Jenkins job data
    const API_ENDPOINT = 'https://api.example.com/jenkins/jobs';

    // Function to fetch Jenkins job data from API
    const fetchJobData = async () => {
        try {
            const response = await fetch(API_ENDPOINT);
            const data = await response.json();
            setJobData(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching job data:', error);
            const sampleData = [
                { jobName: 'Sample Job 1', jobStatus: 'Success' },
                { jobName: 'Sample Job 2', jobStatus: 'Failed' },
                { jobName: 'Sample Job 3', jobStatus: 'Pending' },
            ];
            setJobData(sampleData);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJobData();
    }, []);

    // Function to handle retry action
    const handleRetry = (id: any) => {
        // Implement retry logic here
        console.log(`Retrying job with id: ${id}`);
        // For demo purpose, let's just simulate a build action after retrying
        handleBuild(id);
    };

    // Function to handle build action
    const handleBuild = (id: any) => {
        // Implement build logic here
        console.log(`Building job with id: ${id}`);
    };

    // Columns configuration for the table
    const columns = [
        { title: 'Build', field: 'jobName' },
        { title: 'Source', field: 'jobStatus' },
        { title: 'Status', field: 'status' },
        { title: 'Tests', field: 'test' },
        {
            title: 'Actions',
            field: 'actions',
            render: (rowData: any) => (
                <div>
                    <Icon onClick={() => handleRetry(rowData.id)}>
                        <Visibility />
                    </Icon>
                    <Icon onClick={() => handleBuild(rowData.id)}>
                        <Settings />
                    </Icon>
                </div>
            ),
        },
    ];

    return (
        <Page themeId='home'>
            <Header title="CD Jenkins" subtitle="Manage Jenkins" />
            <Content>
                < ManagePermissionsButton />
                <Table
                    isLoading={loading}
                    data={jobData}
                    columns={columns}
                    options={{ paging: true, pageSize: 10 }}
                    title={
                        <Box display="flex" alignItems="center">
                            <img src={JenkinsLogo} alt="Jenkins logo" height="50px" />
                            <Box mr={2} />
                            <Typography variant="h6">Projects</Typography>
                        </Box>
                    }
                />

            </Content>
        </Page>
    );
};

export default HomePage;
