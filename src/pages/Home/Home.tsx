import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Loadable from 'react-loadable';
import Loading from '../../components/Loading/Loading';
import LearningAbility from '../../components/LearningAbility/LearningAbility';
import { Container, ContentContainer, FormsContainer } from './HomeStyle';
import { data } from './data';

const Home = () => {
    const UserLogin = Loadable({
        loader: () => import('../Login/Login'),
        loading: Loading,
    })

    const UserRegister = Loadable({
        loader: () => import('../Register/Register'),
        loading: Loading,
    })
  return (
    <Container>
        <ContentContainer>
            <h1>
                Enhance Your Child's Learning Abilities
            </h1>

            <ul>
                {
                    data && data.map(({id, img, title, alt, description}) => (
                        <LearningAbility 
                            id={id}
                            img={img}
                            title={title}
                            alt={alt}
                            description={description}
                        />
                    ))
                }
            </ul>

            
        </ContentContainer>
        <FormsContainer>
            <Routes>
                <Route path="/" element={<UserLogin />} />
                <Route path="/register" element={<UserRegister />} />
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
        </FormsContainer>
    </Container>
  )
}

export default Home