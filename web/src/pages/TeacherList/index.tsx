import React, { useState, FormEvent } from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';


function TeacherList() {

    const [teachers, setTeachers] = useState([]);

    const [subject, setsubject] = useState('');
    const [weekDay, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function seachTeachers(e: FormEvent){
        e.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                weekDay,
                time
            }
        });
        setTeachers(response.data);
        console.log(console.log(response.data));
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os Proffys disponíveis">
                <form id="search-teachers" onSubmit={seachTeachers}>
                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={e => { setsubject(e.target.value) }}
                        options={[
                            { value: 'artes', label: 'Artes' },
                            { value: 'biologia', label: 'Biologia' },
                            { value: 'ciencias', label: 'Ciências' },
                            { value: 'quimica', label: 'Química' },
                            { value: 'matematica', label: 'Matemática' }
                        ]}
                    />

                    <Select
                        name="weekDay"
                        label="Dia da semana"
                        value={weekDay}
                        onChange={e => { setWeekDay(e.target.value) }}
                        options={[
                            { value: '0', label: 'Doming' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' }
                        ]}
                    />
                    <Input
                        type="time"
                        name="time"
                        label="Hora"
                        value={time}
                        onChange={e => { setTime(e.target.value) }}
                    />

                    <button type="submit">Buscar</button>
                </form>
            </PageHeader>

            <main>
                { teachers.map((teacherItem: Teacher) => {
                    return <TeacherItem key={teacherItem.id } teacher={teacherItem}/>;
                })}
            </main>
        </div>
    );
}

export default TeacherList;