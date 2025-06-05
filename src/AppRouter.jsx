import { AppRoutes } from '@models/routers.model';
import { Home } from '@views/Home';
import { ListOfStudents } from '@views/ListOfStudents';
import { RoutesWithNotFound } from '@views/NotFoundPage';
import { BrowserRouter, Route } from 'react-router';

import { About } from './views/About';
import { AddNewStudent } from './views/AddNewStudent';
import { DetailsStudent } from './views/DetailsStudent';
import { UpdateStudent } from './views/UpdateStudent';

/**
 * Main application router.
 * This component sets up the routing for the application using React Router.
 * It defines the routes and their corresponding components.
 * @returns {import('react').JSX.Element} The main application router component
 */
export const AppRouter = () => (
	<BrowserRouter>
		<RoutesWithNotFound>
			<Route
				element={<Home />}
				path={AppRoutes.home}
			/>
			<Route
				element={<ListOfStudents />}
				path={AppRoutes.students.studentsHome}
			/>
			<Route
				element={<AddNewStudent />}
				path={AppRoutes.students.addNewStudent}
			/>
			<Route
				element={<UpdateStudent />}
				path={AppRoutes.students.updateStudent}
			/>
			<Route
				element={<DetailsStudent />}
				path={AppRoutes.students.studentDetails}
			/>
			<Route
				element={<About />}
				path={AppRoutes.teamDetails}
			/>
		</RoutesWithNotFound>
	</BrowserRouter>
);
