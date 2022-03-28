import React from 'react'
import Layout from '../components/layouts/LayautAdmin'
import Dashboard from '../components/admin/Dashboard'

const dashboard = () => {
    return (
        <div>
           <Layout>
                <Dashboard></Dashboard>   
            </Layout> 
        </div>
    )
}

export default dashboard
