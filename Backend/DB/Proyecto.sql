--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

-- Started on 2021-11-30 23:45:23

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 211 (class 1259 OID 16706)
-- Name: Curso; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Curso" (
    idcurso integer NOT NULL,
    curso text,
    total text,
    titulo text,
    url text
);


ALTER TABLE public."Curso" OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16767)
-- Name: Curso_idcurso_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."Curso" ALTER COLUMN idcurso ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Curso_idcurso_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 214 (class 1259 OID 16741)
-- Name: Empleos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Empleos" (
    "idEmpleo" integer NOT NULL,
    titulo text,
    empresa text,
    pais text,
    ciudad text,
    imagen text,
    fecha date,
    descripcion text,
    telefono text,
    correo text,
    salario text,
    jornada text,
    verificacion boolean
);


ALTER TABLE public."Empleos" OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 16740)
-- Name: Empleos_idEmpleo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."Empleos" ALTER COLUMN "idEmpleo" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Empleos_idEmpleo_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 212 (class 1259 OID 16720)
-- Name: Modulos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Modulos" (
    "idModulos" integer NOT NULL,
    url text,
    titulo text,
    texto text,
    descripcion text,
    "idCurso" integer NOT NULL
);


ALTER TABLE public."Modulos" OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16760)
-- Name: Modulos_idModulos_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."Modulos" ALTER COLUMN "idModulos" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Modulos_idModulos_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 210 (class 1259 OID 16608)
-- Name: Usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Usuarios" (
    id integer NOT NULL,
    nombres text,
    apellidos text,
    correo text,
    password text,
    pais text,
    ciudad text,
    documento text,
    telefono text,
    "tipoUsuario" integer
);


ALTER TABLE public."Usuarios" OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16607)
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."Usuarios" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 3330 (class 0 OID 16706)
-- Dependencies: 211
-- Data for Name: Curso; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Curso" (idcurso, curso, total, titulo, url) FROM stdin;
1	Programación	3	Curso de programación en Js	https://www.youtube.com/embed/rEsSxd0L4GI
2	Diseño	3	Curso de Diseño	https://www.youtube.com/embed/rEsSxd0L4GI
3	Programación	3	Curso de Desarrollo en Videojuegos	https://www.youtube.com/embed/rEsSxd0L4GI
4	Diseño	3	Curso de Diseño de Interfaz	https://www.youtube.com/embed/rEsSxd0L4GI
5	Diseño	3	Curso de Video Digital	https://www.youtube.com/embed/rEsSxd0L4GI
6	Humanidades	3	Curso de Filosofia	https://www.youtube.com/embed/rEsSxd0L4GI
\.


--
-- TOC entry 3333 (class 0 OID 16741)
-- Dependencies: 214
-- Data for Name: Empleos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Empleos" ("idEmpleo", titulo, empresa, pais, ciudad, imagen, fecha, descripcion, telefono, correo, salario, jornada, verificacion) FROM stdin;
1	Programador front-end en empresa	Program S.A.C	Chile	Santiago de Chile	assets/LogoCompania.png	2021-11-29	Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.	+1 6817243	Programsac@gmail.com		Full time	t
2	Diseñador UI en empresa	UXp S.A.S	Colombia	Bogotá	assets/LogoCompania.png	2021-11-25	Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.	+1 6817243	Programsac@gmail.com		Full time	f
3	Product Designer	Gecko Corp.	Chile	Santiago de Chile	assets/LogoCompania.png	2021-11-25	Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.	+1 6817243	Programsac@gmail.com		Full time	t
4	Vacante en ventas	Sunny Company	Colombia	Bogotá	assets/LogoCompania.png	2021-11-25	Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.	+1 6817243	Programsac@gmail.com		Full time	f
5	Diseñador UX en empresa	UXp S.A.S	Colombia	Bogotá	assets/LogoCompania.png	2021-11-25	Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.	+1 6817243	Programsac@gmail.com		Full time	f
\.


--
-- TOC entry 3331 (class 0 OID 16720)
-- Dependencies: 212
-- Data for Name: Modulos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Modulos" ("idModulos", url, titulo, texto, descripcion, "idCurso") FROM stdin;
2	https://www.youtube.com/embed/AEiRa5xZaZw	Introducción a la Programación Web	Módulo 1: Clase 1	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nunc quis orci cursus viverra vel eu tortor. Maecenas tristique lacus et blandit ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.	1
3	https://www.youtube.com/embed/AEiRa5xZaZw	Aspectos Generales	Módulo 1: Clase 2	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nunc quis orci cursus viverra vel eu tortor. Maecenas tristique lacus et blandit ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.	1
4	https://www.youtube.com/embed/AEiRa5xZaZw	Fundamentos de HTML y CSS	Módulo 2: Clase 1	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nunc quis orci cursus viverra vel eu tortor. Maecenas tristique lacus et blandit ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.	1
5	https://www.youtube.com/embed/AEiRa5xZaZw	Introducción a la Programación Web	Módulo 1: Clase 1	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nunc quis orci cursus viverra vel eu tortor. Maecenas tristique lacus et blandit ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.	2
6	https://www.youtube.com/embed/AEiRa5xZaZw	Introducción a la Programación Web	Módulo 1: Clase 2	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nunc quis orci cursus viverra vel eu tortor. Maecenas tristique lacus et blandit ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.	2
7	https://www.youtube.com/embed/AEiRa5xZaZw	Introducción a la Programación Web	Módulo 1: Clase 1	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nunc quis orci cursus viverra vel eu tortor. Maecenas tristique lacus et blandit ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.	3
8	https://www.youtube.com/embed/AEiRa5xZaZw	Introducción a la Programación Web	Módulo 1: Clase 2	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nunc quis orci cursus viverra vel eu tortor. Maecenas tristique lacus et blandit ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.	3
9	https://www.youtube.com/embed/AEiRa5xZaZw	Introducción a la Programación Web	Módulo 1: Clase 1	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nunc quis orci cursus viverra vel eu tortor. Maecenas tristique lacus et blandit ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.	4
10	https://www.youtube.com/embed/AEiRa5xZaZw	Introducción a la Programación Web	Módulo 1: Clase 2	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nunc quis orci cursus viverra vel eu tortor. Maecenas tristique lacus et blandit ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.	4
11	https://www.youtube.com/embed/AEiRa5xZaZw	Introducción a la Programación Web	Módulo 1: Clase 1	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nunc quis orci cursus viverra vel eu tortor. Maecenas tristique lacus et blandit ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.	5
12	https://www.youtube.com/embed/AEiRa5xZaZw	Introducción a la Programación Web	Módulo 1: Clase 2	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nunc quis orci cursus viverra vel eu tortor. Maecenas tristique lacus et blandit ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.	5
13	https://www.youtube.com/embed/AEiRa5xZaZw	Introducción a la Programación Web	Módulo 1: Clase 1	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nunc quis orci cursus viverra vel eu tortor. Maecenas tristique lacus et blandit ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.	6
14	https://www.youtube.com/embed/AEiRa5xZaZw	Introducción a la Programación Web	Módulo 1: Clase 2	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nunc quis orci cursus viverra vel eu tortor. Maecenas tristique lacus et blandit ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.	6
\.


--
-- TOC entry 3329 (class 0 OID 16608)
-- Dependencies: 210
-- Data for Name: Usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Usuarios" (id, nombres, apellidos, correo, password, pais, ciudad, documento, telefono, "tipoUsuario") FROM stdin;
5	Andrés	Rodriguez	correo@correo.cl	123	Chile	Santiago	cv.pdf	123455678	1
6	Juliana	Rivera	test@test.cl	321	Colombia	Bogotá	cv2.pdf	123455678	1
7	Juan Camilo	Gomez	test2@test2.cl	3212	Chile	Valparaíso	cv3.pdf	123455678	1
8	Joaquin	Herrera	test4@test4.cl	0000	Chile	Santiago	cv3.pdf	123455678	2
9	adsads	adsads	adsads	adsads	asdasdsa	dasdsa	adsads	adsads	1
10	adsads	adsads	adsads	adsads	asdasdsa	dasdsa	adsads	adsads	1
12	aaaaaaaa	aaaaaaaa	test@test	aaaaaaaa	BO	La Paz Department	aaaa	123123123	1
\.


--
-- TOC entry 3341 (class 0 OID 0)
-- Dependencies: 216
-- Name: Curso_idcurso_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Curso_idcurso_seq"', 6, true);


--
-- TOC entry 3342 (class 0 OID 0)
-- Dependencies: 213
-- Name: Empleos_idEmpleo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Empleos_idEmpleo_seq"', 6, true);


--
-- TOC entry 3343 (class 0 OID 0)
-- Dependencies: 215
-- Name: Modulos_idModulos_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Modulos_idModulos_seq"', 14, true);


--
-- TOC entry 3344 (class 0 OID 0)
-- Dependencies: 209
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_seq', 12, true);


--
-- TOC entry 3182 (class 2606 OID 16712)
-- Name: Curso Curso_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Curso"
    ADD CONSTRAINT "Curso_pkey" PRIMARY KEY (idcurso);


--
-- TOC entry 3187 (class 2606 OID 16747)
-- Name: Empleos Empleos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Empleos"
    ADD CONSTRAINT "Empleos_pkey" PRIMARY KEY ("idEmpleo");


--
-- TOC entry 3185 (class 2606 OID 16726)
-- Name: Modulos modulos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Modulos"
    ADD CONSTRAINT modulos_pkey PRIMARY KEY ("idModulos");


--
-- TOC entry 3180 (class 2606 OID 16612)
-- Name: Usuarios user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Usuarios"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- TOC entry 3183 (class 1259 OID 16766)
-- Name: fki_idCurso; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "fki_idCurso" ON public."Modulos" USING btree ("idCurso");


--
-- TOC entry 3188 (class 2606 OID 16761)
-- Name: Modulos idCurso; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Modulos"
    ADD CONSTRAINT "idCurso" FOREIGN KEY ("idCurso") REFERENCES public."Curso"(idcurso) NOT VALID;


-- Completed on 2021-11-30 23:45:23

--
-- PostgreSQL database dump complete
--

