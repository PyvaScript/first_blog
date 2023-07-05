const PRODUCTS=[
    {
        title: 'anti-virus',
        items:[
            {
                id:1,
                name:"Norton+",
                imageURL:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRzqGJKJYh8x_SfuPvtlWrH_TX2guLkFFgZE3V70krogDHGQmJ2HSUK91c-0DxKhaWoveQJAjIfwZE80aEy5VcaTIgWDDb65UMaA0gABNhrrGYpP5EHjX4-izwrLyMTsTbqk0U&usqp=CAc",
                price:70,
            },
            {
                id:2,
                name:"McAfee+",
                imageURL:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRQpemeeVRok3R6wXTFUinQ33CZ_q0Gy24hRpQVgWh-MN_oBl-r3zUb-n57Hiltv-74NcFNouX1jNfRA4agezaVwv8D-Wseg2aE_qISTqxEjqt090VlKIj9JQ&usqp=CAc",
                price:70,
            },
            {
                id:3,
                name:"Bitdefender+",
                imageURL:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRrYm3VYr0EdkCwOoaa-DkGEx0_0V2tVm0iFY6jaBTi27ve02C1ayGXh6P5ieuodbnO4dan4PXF-FtGk48dl3Ek0LlnJ3M37DjLacDDRiyxG6mUJpxTVWcu&usqp=CAc",
                price:48,
            },
            {
                id:4,
                name:"Panda",
                imageURL:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR4DmkIAb7pdpVOVsA96filUry0ATMftPQvudoamVgyJS0K7xSGVv0cXsvGXsf9STvR-DI3dDK1-NLK8G-oyKMkC1984GL7QDA9SjBPDbGfyF4_gzXaFFXwlQ&usqp=CAc",
                price:35,
            },
            {
                id:5,
                name:"Panda Full Encryption",
                imageURL:"https://cdn.shopify.com/s/files/1/0250/9150/6279/products/Full-Encryption_280x.png?v=1619490777",
                price:50
            }
        ]
    },
    {
        title: 'mice',
        items: [
            {
                id:6,
                name:"Microsoft Surface Arc",
                imageURL:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQG0Ha3QOwWS2X_2vgkOezgHZWykfdR5CQdwjEGgomTJo9p9AboSY9GiRctbHXyA66h6a5jZK_xoUVLs-zqHDppxnD6LCzEq04k_ROKZYb2oaKC4iHNy8pD&usqp=CAc",
                price:160
            },
            {
                id:7,
                name:"Microsoft Surface Mobile",
                imageURL:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTalxDKg654alqjYCESzQ4tR25_z_oX9ApsSi9WLYF5Dno3JghT8CKH2QwAr6bMBWtIByZdkrS0ghkbV0oWV7U4w_GRbC2_GmjO1bs1YjRfkaOLSZxHEAqAG7M8epNdBsJ9&usqp=CAc",
                price:70
            },
            {
                id:8,
                name:"Razor Naga Trinity",
                imageURL:"https://images.officeworks.com.au/api/2/img/https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/RZ02410100_razer_naga_trinity_wired_gaming_mouse.jpg/resize?size=600&auth=MjA5OTcwODkwMg__",
                price:160
            },
            {
                id:9,
                name:"Logitech POP yellow",
                imageURL:"https://cdn.shopify.com/s/files/1/0024/9803/5810/products/533020-Product-0-I-637674921149364350_380x380.jpg?v=1631859388",
                price:60,
            },
            {
                id:10,
                name:"Logitech POP pink",
                imageURL:"https://cdn.shopify.com/s/files/1/0024/9803/5810/products/533021-Product-0-I-637674918749631727_380x380.jpg?v=1631859150",
                price:60,
            }
        ]
    },
    {
        title: 'pads',
        items: [
            {
                id:11,
                name:"Astronaut",
                imageURL:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTVowdwWpAz3gW6Yn3NBL4EdnsucKKDaNhrO2R1XGRtHD65Noe5OydYZXrCU06BFZdBf9Vf3OzqC01NLDdGR9-5iw9i0xKZ44R6_nFFYxkM3Uc1T8bjcrdjOw&usqp=CAE",
                price:30
            },
            {
                id:12,
                name:"Dark Dragon",
                imageURL:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQsNYW134vDdvFflczXZsID8rs2le8m-O--RM6g4z5UvWckJtzyuxaPRvY5XX_IDd3jDh2XBF5zwQxaRcTfK3Ou9jQrZZY1wJf_ImKUHKeRz6VlzSswuueltw&usqp=CAE",
                price:32
            },
            {
                id:13,
                name:"Ailrinni",
                imageURL:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQoRQl4nTCPSM4aWC7izpLaUNZRd_CbL1iDg3ivnfC02oK-pEOyQM0LDzbC2naf_SmzOuqH1duTUoGFQrkTwWe952L6MkKtWa50dJn4yMwHG9QYDAA3xKsq&usqp=CAE",
                price:20
            },
            {
                id:14,
                name:"Gothic desk cover",
                imageURL:"https://i.etsystatic.com/37182844/r/il/1e7648/4855181667/il_600x600.4855181667_94w5.jpg",
                price:55,
            },
            {
                id:15,
                name:"JWSP Pillars of Creation",
                imageURL:"https://i.etsystatic.com/36469371/c/1869/1869/63/71/il/763bd0/4324590743/il_600x600.4324590743_pxd5.jpg",
                price:50
            }
        ]
    },
    {
        title: 'keyboards',
        items: [
            {
                id:16,
                name:"Razor Ornata v3",
                imageURL:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRODunPeR6Su30jMur1LPZwEtn90qVf7qMR7sPGy2KzEqITTfrwfsjze3ZzwYRgzWtVqP_QPlUVEc31fyQslhuFM0C2EbrTXP8VlQAfmYzDWo4TIXTumVHP2Q&usqp=CAE",
                price:120
            },
            {
                id:17,
                name:"Kmart Mechanical",
                imageURL:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQA5S3fi_eLKUi2sjtNgqJBNSyESXsZze1A6gMeD7MZWgdu_OIM71Et9brbKwwlSCNHL0rDsS5orolyF4U2fSHIc_qa4zfeBBfoNS9vyanbqxrJlzJl_ObBGg&usqp=CAE",
                price:40
            },
            {
                id:18,
                name:"Embedded Stainless",
                imageURL:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSz4rIjJ31ERpshfPvVy3L7kG-t3OCgZ-jEh5xxjfiBj8AoXStFCbS2sayhy1LTM-iwLO2lstdHdZXV_Uy97ELlYuRZsAayti_rRIrTVusF9Bs-Fopqh1JP&usqp=CAE",
                price:70
            },
            {
                id:19,
                name:"Razer Huntsman Mini",
                imageURL:"https://cdn.shopify.com/s/files/1/0024/9803/5810/products/475896-Product-0-I-637308636067854700_13f24f2f-be6e-4797-b010-0a3f8e48fac7_380x380.jpg?v=1614740881",
                price:150
            },
            {
                id:20,
                name:"ASUS ROG Claymore II Modular Optical Gaming Keyboard",
                imageURL:"https://cdn.shopify.com/s/files/1/0024/9803/5810/products/595093-Product-0-I-637952204604264473_380x380.jpg?v=1659587777",
                price:500
            }
        ]
    },
    {
        title: "monitors",
        items: [
            {
                id:21,
                name:"LG Ultrawide",
                imageURL:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS2LxFbP96AhZtCGwjBmTWLCbvooV9ZmUzGYHuwc4jz3t-qNso0yckwOA_nGJ4lQ7tHe7FtuQPHbVwaYUIbrMNyCaxlJxKhOpOeWtFLhXU&usqp=CAE",
                price:600
            },
            {
                id:22,
                name:"Mobile Pixels Trio Max",
                imageURL:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTEm0TsIgDB6hVHV5x5onLt3yu1TCbmoFDWFaDmueIFyS9jy5r1VxSZUCvINFHUM4PDlS6_ecSr7D4aBXjJ3E9wZUT7O97xBlZ6sMM3jqo",
                price:400
            },
            {
                id:23,
                name:"SOHO Portable",
                imageURL:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQl_TNtZA76V-Yu9pxw7U9aZJKgU_7JlPVYKSs8ifKOKDwkzfRIW6Hzo4ygm2x2P3zI_s7C2d7jvBorXV-t-27cfaRzaPyWTOiSh6lYRrwv7EDHHdOKKScT&usqp=CAE",
                price:300
            },
            {
                id:24,
                name:"HP 34in gaming",
                imageURL:"https://azcd.harveynorman.com.au/media/catalog/product/cache/21/small_image/205x115/9df78eab33525d08d6e5fb8d27136e95/5/2/5232166-hp-34-inch-x34-wqhd-gaming-monitor.jpg",
                price:900
            },
            {
                id:25,
                name:"LG 45in UltraGear OLED Curved",
                imageURL:"https://azcd.harveynorman.com.au/media/catalog/product/cache/21/small_image/205x115/9df78eab33525d08d6e5fb8d27136e95/4/5/45gr95qe-b.aau-lg-ultregear-oled-curved-gaming-monitor.jpg",
                price:3100
            }
        ]
    },
    {
        title: "Desktops",
        items: [
            {
                id:26,
                name:"Lenovo Think Center",
                imageURL:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQEUPYisffzE9UuJoihHb9XPz4mC_cRBcXH6XzVWP679zLhwewpyaz9EjfrQaQ4h9zCMuL4wZx7U0oysvC-2F2FE6tdhH_078SabI7DYCEY&usqp=CAE",
                price:1000
            },
            {
                id:27,
                name:"Dell Optiplex",
                imageURL:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQaSEUty6XDvcu0iik27GQz1HdpfSKg53cgS9Dd4YjRrMq-UljMQMEDcdy-d5WR26GlMznlufCEF3xWpwLyASWvcwn29un9EFnT-5l9Q7cX&usqp=CAE",
                price:200
            },
            {
                id:28,
                name:"Apple Mac Studio",
                imageURL:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRyCmMuFlnfUOswVT0UvyXzlQLQygKBYKmhEHTSyVsbI62AkiLB_1CkBRa1ewU1gMHdmqAhfI-_UvDIiCMX1CyaozRrtL6LYbtrIDTzYGFE69ZivWkvizizFNgr&usqp=CAE",
                price:7000
            },
            {
                id:29,
                name:"Raspberry Pi 4 Model B 8GB",
                imageURL:"https://prod.scorptec.com.au/19/255/83621/210603_large.jpg",
                price:200
            },
            {
                id:30,
                name:"Scorptec Vengeance RTX 4090 Gaming",
                imageURL:"https://prod.scorptec.com.au/33/1156/102920/292497_large.jpg",
                price:7100
            }
        ]
    },
    {
        title: 'laptops',
        items: [
            {
                id:31,
                name:"Lenovo ThinkPad P17",
                imageURL:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQxVNqDRm9bSZ_rfOViUdDGCU9Z946FIE1UtymwrkHDO066n9lJsDW-g-7KyEKBNc8TosVKDFphV8muU29-_wMtwKwF0geF6TxRJj5vP9xTp1PIGJNvuNAL9g&usqp=CAE",
                price:2000
            },
            {
                id:32,
                name:"Apple Macbook Air",
                imageURL:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRZxZA9gAeVuElj5tDX-z_E8JADzLFjj81w0xIq5ckRa19uDsIJynPUG4adj5AHn7QEhR0LwmkGTxlEGsnh-STXoS6gWtLtBORWPxqcTmuKO7xSsKvJrRtr&usqp=CAE",
                price:2000
            },
            {
                id:33,
                name:"Dell Inspiron Mini",
                imageURL:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR_OySOg5B1ABsm0fEmiLWw-Jossg4LgJ8dGWyT8EfHLbRrH0re_-5figkncjUzKDmuLNwUgV68V7kX8bcBFxCzIYUGZ9rgdrvDROVPFfwW8xpadbx9PcVn&usqp=CAE",
                price:2000
            },
            {
                id:34,
                name:"Predator Helios Neo 16in",
                imageURL:"https://azcd.harveynorman.com.au/media/catalog/product/cache/21/small_image/205x115/9df78eab33525d08d6e5fb8d27136e95/p/r/predator-helios-neo-16-gaming-laptop_1.jpg",
                price:3600
            },
            {
                id:35,
                name:"HP Spectre 13.5in",
                imageURL:"https://azcd.harveynorman.com.au/media/catalog/product/cache/21/small_image/205x115/9df78eab33525d08d6e5fb8d27136e95/7/y/7y6k5pa-hp-spectre-x360-14-ef2022t-2-in-1-device.jpg",
                price:3200
            }
        ]
    }
]

export default PRODUCTS;
