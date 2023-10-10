// import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
// import "../../CSS/Nav.css"
import { GiHamburgerMenu } from 'react-icons/gi'

import { Box, Button,  IconButton, Image } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom'

const MobNav2 = ({ setHamburger }) => {

    const [logout, setlogout] = useState(false)
    const navigate = useNavigate()

  let token = JSON.parse(localStorage.getItem("token"))

  useEffect(() => {
    if (token) {
      setlogout(true)
    } else {
      setlogout(false)
    }
  }, [logout])

  let Display
  let D2

  if (logout) {
    Display = "inline"
    D2 = "none"
  } else {
    Display = "none"
    D2 = "inline"
  }

    const logouts = () => {
        localStorage.setItem("token", JSON.stringify(""))
        localStorage.setItem("userId", JSON.stringify(""))
        setlogout(false)
      }
    return (
        <Box>
            <Box border={"none"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} p={"1%"}>

                <Box display={"flex"} alignItems={"center"} w={["25%", "25%", "25%"]}>
                    <IconButton onClick={() => setHamburger(true)}><GiHamburgerMenu /></IconButton>

                    <Box>
                        <Image src=' ' alt="" w={["80%", "70%", "55%"]} />
                    </Box>
                </Box>

                <Box display={"flex"} w={"40%"} justifyContent={"space-between"} mt={"2%"} alignItems={"center"} >
                    <Button backgroundColor={'pink.500'} color={"white"} _hover={{ backgroundColor: "pink.400" }} display={D2} onClick={() => navigate("/signup")}>Login</Button>
                    <Button backgroundColor={'pink.500'} color={"white"} _hover={{ backgroundColor: "pink.400" }} display={Display} onClick={logouts}>Logout</Button>
                    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                        <Image src="https://img.icons8.com/ios-glyphs/256/hearts.png" style={{ width: "25px" }} alt="" />
                        {/* <Text fontSize={"1.9vw"}>Wishlist</Text> */}
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                        <Image src="https://img.icons8.com/windows/256/shopping-bag-full.png" style={{ width: "25px" }} alt="" />
                        {/* <Text fontSize={"1.9vw"}>Bag</Text> */}
                    </Box>



                </Box>
            </Box>

        </Box>
    )
}

export default MobNav2