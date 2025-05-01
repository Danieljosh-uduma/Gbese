
export default function Dashboard() {
    const userName = localStorage.getItem('userName') || 'User'; // Replace with actual user name retrieval logic
    

    return (
        <div className="dashboard">
        <h1>{userName}'s, Dashboard</h1>
        <p>Welcome to the dashboard!</p>
        </div>
    );
}