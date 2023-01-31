import React, { useState } from 'react'
import Swal from 'sweetalert2';

import Header from './Header';
import List from './List';
import Add from './Add';
// import Sidebar from './Sidebar';
import Edit from './Edit';

import { employeesData } from '../../data';

interface employeeInterface {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    salary: string;
    date: string;
}

function StudentDashboard() {

    const [employees, setEmployees] = useState(employeesData);
    const [selectedEmployee, setSelectedEmployee] = useState<employeeInterface>({} as employeeInterface);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (id: number) => {
        const [employee] = employees.filter(employee => employee.id === id);

        setSelectedEmployee(employee);
        setIsEditing(true);
    }

    const handleDelete = (id: number) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Approve it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [employee] = employees.filter(employee => employee.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Approved!',
                    text: `${employee.firstName} ${employee.lastName}'s data has been Approved.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setEmployees(employees.filter(employee => employee.id !== id));
            }
        });
    }


    return (
        <div className='container'>
            {/* List */}
            {/* <Sidebar /> */}
            {!isAdding && !isEditing && (
                <>
                    <Header
                        setIsAdding={setIsAdding}
                    />
                    <List
                        employees={employees}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </>
            )}
            {/* Add */}
            {isAdding && (
                <Add
                    employees={employees}
                    setEmployees={setEmployees}
                    setIsAdding={setIsAdding}
                />
            )}
            {/* Edit */}
            {isEditing && (
                <Edit
                    employees={employees}
                    selectedEmployee={selectedEmployee}
                    setEmployees={setEmployees}
                    setIsEditing={setIsEditing}
                />
            )}
        </div>
    )
}

export default StudentDashboard;