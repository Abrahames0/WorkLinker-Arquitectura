import { Box, Card, CardHeader } from "@mui/material"
import Form from "react-bootstrap/Form"

import RegistroUsuarioInformacion from "./RegistroUsuarioInformacion"

export const StepperRegistroUsuarios = () => {

    const pasos = [
        <RegistroUsuarioInformacion/>
    ]


    return (
        <Box>
            <div>
                <Card sx={{ justifyContent: "center", alignItems: "center", border: 0, m: 1 }} variant="outlined">
                    <CardHeader className="text-center" title="Registro de Usuario"></CardHeader>
                    <Form noValidate /* onSubmit={handleSubmit} */>
                    <div className='row justify-content-center'>
                        <div className='col-xs-12 col-sm-8 col-md-7 col-lg-6'>
                        {pasos /* [activeStep] */}
                        </div>
                    </div>
                    </Form>
                </Card>
            </div>
        </Box>
    )
}