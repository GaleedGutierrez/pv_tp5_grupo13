/* eslint-disable security/detect-object-injection */
import { Button, Field, Fieldset, HStack, Input } from '@chakra-ui/react';
import { useGlobalContext } from '@context/global.context';
import { RiDeleteBin2Line, RiSave3Line } from 'react-icons/ri';
import { useParams } from 'react-router';

/** @import { Student } from '@models/student.model' */

/**
 * Component that renders a form for adding a new student.
 * @param {Object} props - Component properties.
 * @param {boolean} [props.isEditing] - The unique identifier for the student when editing.
 * If provided, the form will be pre-filled with the student's data.
 * @param {() => void} props.onCancelForm - Function to handle form cancellation.
 * @param {React.RefObject<HTMLFormElement | null>} props.formRef - Reference to the form element.
 * @param {(student: Student) => void} props.onSavedStudent - Callback function to handle the saved student.
 * @returns {import('react').JSX.Element} The rendered component with a form for adding a new student.
 */
export const Form = ({ isEditing, onCancelForm, formRef, onSavedStudent }) => {
	const { students, setStudents } = useGlobalContext();
	const { alumnoId: lu } = useParams();
	/** @type {Student | undefined}*/
	let student = undefined;

	if (lu) {
		student = students.find((student) => student.lu === lu);
	}

	const { name, lastName, yearOfStudy, address, phone, email } =
		student || {};

	/**
	 * Handle form submission
	 * @param {import('react').FormEvent<HTMLFormElement>} event - The form event
	 * @returns {void}
	 */
	const handleSaveStudent = (event) => {
		event.preventDefault();

		const FORM_DATA = new FormData(event.currentTarget);
		const lu = FORM_DATA.get('lu')?.toString();
		const EXISTING_STUDENT = students.find((student) => student.lu === lu);

		if (EXISTING_STUDENT && !isEditing) {
			alert(
				`Ya existe un alumno con el L.U. ${lu}. Por favor, utiliza otro.`,
			);

			return;
		}

		const name = FORM_DATA.get('name')?.toString().trim();
		const lastName = FORM_DATA.get('lastName')?.toString().trim();
		const yearOfStudy = FORM_DATA.get('yearOfStudy')?.toString().trim();
		const email = FORM_DATA.get('email')?.toString().trim();
		const address = FORM_DATA.get('address')?.toString().trim();
		const phone = FORM_DATA.get('phone')?.toString().trim();

		if (
			!name ||
			!lastName ||
			!lu ||
			!yearOfStudy ||
			!email ||
			!address ||
			!phone
		) {
			alert('Por favor, completa todos los campos requeridos.');

			return;
		}

		/** @type {Student}*/
		const NEW_STUDENT = {
			lu,
			name,
			lastName,
			yearOfStudy: parseInt(yearOfStudy, 10),
			email,
			address,
			phone,
		};

		const STUDENTS = structuredClone(students);

		if (isEditing && student) {
			const EDITING_STUDENT_INDEX = STUDENTS.findIndex(
				(student) => student.lu === lu,
			);

			if (EDITING_STUDENT_INDEX !== -1) {
				STUDENTS[EDITING_STUDENT_INDEX] = NEW_STUDENT;
			}
		} else {
			STUDENTS.push(NEW_STUDENT);
		}

		setStudents(STUDENTS);
		onSavedStudent(NEW_STUDENT);
		formRef.current?.reset();
	};

	return (
		<form
			ref={formRef}
			onSubmit={handleSaveStudent}
		>
			<Fieldset.Root>
				<Fieldset.Legend fontSize="2xl">
					Agrega un nuevo alumno
				</Fieldset.Legend>
				<Fieldset.HelperText
					colorPalette="fg.muted"
					fontSize="md"
				>
					Ingresa los datos del nuevo alumno
				</Fieldset.HelperText>

				<Fieldset.Content>
					<Fieldset.Root>
						<Fieldset.Legend
							fontSize="xl"
							fontWeight="normal"
						>
							Información Personal
						</Fieldset.Legend>
						<Field.Root>
							<Field.Label>Nombre</Field.Label>
							<Input
								required
								defaultValue={name || ''}
								fontSize="md"
								name="name"
								placeholder="Juan Carlos"
								type="text"
							/>
						</Field.Root>
						<Field.Root>
							<Field.Label>Apellido</Field.Label>
							<Input
								required
								autoComplete="family-name"
								defaultValue={lastName || ''}
								fontSize="md"
								name="lastName"
								placeholder="Pérez"
								type="text"
							/>
						</Field.Root>
					</Fieldset.Root>

					<Fieldset.Root>
						<Fieldset.Legend
							fontSize="xl"
							fontWeight="normal"
						>
							Información Académica
						</Fieldset.Legend>
						<Field.Root>
							<Field.Label>L.U.</Field.Label>
							<Input
								required
								autoComplete="on"
								defaultValue={lu || ''}
								fontSize="md"
								name="lu"
								placeholder="APU1234"
								type="text"
							/>
						</Field.Root>
						<Field.Root>
							<Field.Label>Curso</Field.Label>
							<Input
								required
								fontSize="md"
								max={5}
								min={1}
								name="yearOfStudy"
								placeholder="3"
								type="number"
								defaultValue={
									yearOfStudy ? yearOfStudy.toString() : ''
								}
							/>
						</Field.Root>
					</Fieldset.Root>

					<Fieldset.Root>
						<Fieldset.Legend
							fontSize="xl"
							fontWeight="normal"
						>
							Información de Contacto
						</Fieldset.Legend>
						<Field.Root>
							<Field.Label>Domicilio</Field.Label>
							<Input
								required
								autoComplete="street-address"
								defaultValue={address || ''}
								fontSize="md"
								name="address"
								placeholder="Av. Siempreviva 123"
								type="text"
							/>
						</Field.Root>

						<Field.Root>
							<Field.Label>Teléfono</Field.Label>
							<Input
								required
								autoComplete="tel"
								defaultValue={phone || ''}
								fontSize="md"
								name="phone"
								placeholder="1234567890"
								type="tel"
							/>
						</Field.Root>

						<Field.Root>
							<Field.Label>Email</Field.Label>
							<Input
								required
								autoComplete="email"
								defaultValue={email || ''}
								fontSize="md"
								name="email"
								placeholder="juancarlos@perez.com"
								type="email"
							/>
						</Field.Root>
					</Fieldset.Root>
				</Fieldset.Content>

				<HStack justifyContent="end">
					<Button
						colorPalette="red"
						title="Cancelar"
						variant="outline"
						// eslint-disable-next-line react/jsx-handler-names
						onClick={onCancelForm}
					>
						<RiDeleteBin2Line />
					</Button>
					<Button
						colorPalette="green"
						title="Guardar alumno"
						type="submit"
					>
						<RiSave3Line />
					</Button>
				</HStack>
			</Fieldset.Root>
		</form>
	);
};
