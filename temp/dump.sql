--
-- PostgreSQL database dump
--

-- Dumped from database version 16.6
-- Dumped by pg_dump version 16.6

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
-- Name: category; Type: TABLE; Schema: public; Owner: benny
--

CREATE TABLE public.category (
    id uuid NOT NULL,
    title character varying(255) NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    deleted boolean DEFAULT false NOT NULL
);


ALTER TABLE public.category OWNER TO benny;

--
-- Name: migrations; Type: TABLE; Schema: public; Owner: benny
--

CREATE TABLE public.migrations (
    id integer NOT NULL,
    "timestamp" bigint NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.migrations OWNER TO benny;

--
-- Name: migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: benny
--

CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.migrations_id_seq OWNER TO benny;

--
-- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: benny
--

ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;


--
-- Name: todolist; Type: TABLE; Schema: public; Owner: benny
--

CREATE TABLE public.todolist (
    id uuid NOT NULL,
    "categoryId" uuid NOT NULL,
    title character varying(255) NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    checked boolean DEFAULT false NOT NULL,
    "order" integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.todolist OWNER TO benny;

--
-- Name: migrations id; Type: DEFAULT; Schema: public; Owner: benny
--

ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);


--
-- Data for Name: category; Type: TABLE DATA; Schema: public; Owner: benny
--

COPY public.category (id, title, "createdAt", "updatedAt", deleted) FROM stdin;
5a100a00-a6ee-44c6-8d42-0cc261839aa2	delete test	2024-11-29 01:26:45.218	2024-11-28 16:27:13.052598	t
80b6b660-ef47-4d0c-a6cf-53e424079c72	20241028	2024-10-28 13:50:17.37	2024-11-28 17:09:38.540167	t
77f46761-7b4c-4a58-8f2e-3d75ee3c460e	something 1	2024-10-23 16:58:30.76	2024-10-23 17:02:36.369	t
83e7752d-39a5-4093-a0d5-dee5ac04c598	something 3	2024-10-23 17:21:07.144	2024-10-23 17:21:07.144	t
5046740a-7e8b-4ef8-8153-87e786dac70f	something 4	2024-10-23 17:39:43	2024-10-23 17:39:43	t
01ca6ab0-3673-4097-b67e-07efd35ec880	something 8	2024-10-24 15:06:55.81	2024-10-24 06:54:00.826966	t
a8fab08d-859e-409f-a733-6b2248566ebb	something 7	2024-10-23 18:08:28.005	2024-10-24 07:07:07.939952	t
fc220918-7154-4019-a0e8-7b50ab1083c1	something 6	2024-10-23 18:08:23.036	2024-10-24 07:07:12.105245	t
580a5a35-69be-40fd-91a8-716c7570aead	something 2	2024-10-23 16:58:58.354	2024-10-28 06:07:36.9688	t
c652a5e4-54ad-4274-9454-38525398b759	test test	2024-10-29 16:11:47.772	2024-12-17 08:44:39.041181	f
5d12f979-b5d1-4a84-bc31-8ba81dfcc40d	create new one	2024-12-24 17:53:57.507	2024-12-24 08:58:34.314784	t
9e197069-28aa-4d03-8ce0-43d71ea94798	test	2024-12-27 18:03:53.886	2024-12-27 09:03:56.527584	t
b4a60d49-0417-4dd9-ac3c-93cf1ddccfe7	20241029 yea	2024-10-29 15:09:33.328	2024-12-27 09:04:04.955643	f
f144cc78-34d9-4d0a-9e95-48cf7102dce3	Testing update	2024-12-17 17:44:48.925	2025-01-06 07:05:39.321	f
ebb7fd86-b4ce-49b2-a70a-87485287304e	change title 001	2024-10-23 17:41:32.86	2024-10-30 08:20:03.682229	t
\.


--
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: benny
--

COPY public.migrations (id, "timestamp", name) FROM stdin;
1	1728629364254	Mig1728629364254
4	1728898354999	Mig1728898354999
5	1729068361177	Mig1729068361177
6	1729669944640	Mig1729669944640
7	1729672265317	Mig1729672265317
8	1729751492381	Mig1729751492381
9	1730705950584	Mig1730705950584
\.


--
-- Data for Name: todolist; Type: TABLE DATA; Schema: public; Owner: benny
--

COPY public.todolist (id, "categoryId", title, "createdAt", "updatedAt", checked, "order") FROM stdin;
28a031cd-ec27-4b0a-bcd7-dbdb7476103d	c652a5e4-54ad-4274-9454-38525398b759	hey dear	2024-10-30 18:08:09.245	2024-10-30 18:08:20.486	t	0
eeacde7d-3c8b-4599-bc61-9ab8f315d4ad	c652a5e4-54ad-4274-9454-38525398b759	hey there	2024-10-30 18:08:14.508	2024-10-30 18:08:21.521	t	0
16226b25-e11d-4d50-acde-836fc5637353	c652a5e4-54ad-4274-9454-38525398b759	aa	2024-11-29 22:43:08.871	2024-11-29 22:43:11.274	t	7
bf49bb78-24f9-4baa-90fd-0629cafc46a4	c652a5e4-54ad-4274-9454-38525398b759	베이스!	2024-10-31 14:56:27.756	2024-12-24 09:38:08.229254	f	2
a6aedb60-9648-482e-89fc-412620d4dbab	c652a5e4-54ad-4274-9454-38525398b759	a	2024-11-27 02:24:09.244	2024-11-27 02:24:14.59	t	1
4e61eee8-eeb2-4d1a-9e67-b73706c1cabe	c652a5e4-54ad-4274-9454-38525398b759	b	2024-11-27 02:24:12.393	2024-11-27 02:24:15.494	t	0
4f93f6f5-8e78-4056-9679-821b71612e02	c652a5e4-54ad-4274-9454-38525398b759	asd	2024-11-27 02:24:01.651	2024-11-27 02:24:17.121	t	3
50dffcb3-5e29-4c36-bf83-866dfb43acd7	c652a5e4-54ad-4274-9454-38525398b759	a	2024-11-27 02:24:45.223	2024-11-27 02:24:52.346	t	0
d14951ff-dc38-4591-953a-04e7b969e9ff	c652a5e4-54ad-4274-9454-38525398b759	b	2024-11-27 02:24:53.268	2024-11-27 02:24:55.657	t	0
a99c6700-991f-471f-af16-cc85a4d99281	c652a5e4-54ad-4274-9454-38525398b759	d	2024-11-27 02:24:59.663	2024-11-27 02:28:25.167	t	0
cb27f677-99ce-4b61-9a93-3d839b633add	83e7752d-39a5-4093-a0d5-dee5ac04c598	001	2024-10-23 17:31:50.618	2024-10-23 17:31:50.618	f	0
8f4bb080-3fb3-469f-a83a-cb5a5b020557	ebb7fd86-b4ce-49b2-a70a-87485287304e	123	2024-10-24 16:12:01.381	2024-10-24 16:12:01.381	t	0
5d97faa0-1b4c-4af1-9a68-69bb71ce5b29	ebb7fd86-b4ce-49b2-a70a-87485287304e	001	2024-10-24 16:12:04.531	2024-10-24 16:12:04.531	f	0
edfa1276-9881-45b5-b885-4a7d4f3d0ac4	80b6b660-ef47-4d0c-a6cf-53e424079c72	update category form	2024-10-28 13:50:30.176	2024-10-28 13:50:30.176	t	0
f6044a80-b4eb-442f-9493-ee7c335ac576	b4a60d49-0417-4dd9-ac3c-93cf1ddccfe7	Add server update category testcode	2024-10-29 15:20:37.348	2024-10-29 15:20:37.348	t	0
cc37f709-7115-4317-823b-3cdb08fac91f	b4a60d49-0417-4dd9-ac3c-93cf1ddccfe7	server category refectoring	2024-10-29 15:10:09.117	2024-10-29 15:10:09.117	t	0
71a55567-ef18-4b75-b7df-fb1bae2769b5	c652a5e4-54ad-4274-9454-38525398b759	AAA	2024-11-27 02:28:34.625	2024-11-27 02:29:27.02	t	0
270054f5-59a0-4afa-b42a-345a0ad7c4fa	c652a5e4-54ad-4274-9454-38525398b759	a	2024-11-27 02:29:28.214	2024-11-27 02:29:30.976	t	0
1ae9da80-4bc6-4d71-b82b-d4029f86f789	c652a5e4-54ad-4274-9454-38525398b759	ed	2024-11-27 02:29:46.57	2024-11-27 02:30:00.734	t	0
cf26eaea-ca8e-489a-8b0f-e3aaf966e00c	c652a5e4-54ad-4274-9454-38525398b759	bcd	2024-11-27 02:29:38.848	2024-11-27 02:30:01.576	t	0
586e5f4d-376c-4c61-958a-618dd34bc7aa	c652a5e4-54ad-4274-9454-38525398b759	003	2024-10-29 16:31:49.448	2024-10-29 16:31:49.448	t	0
0ad18a11-aad0-4407-9a14-c2fea7a5ce09	c652a5e4-54ad-4274-9454-38525398b759	120	2024-10-29 16:34:19.852	2024-10-29 16:34:19.852	t	0
1fe1f363-4f20-47a0-8c1e-dc38344f8903	c652a5e4-54ad-4274-9454-38525398b759	001	2024-10-28 16:11:51.139	2024-10-28 16:11:51.139	t	0
cd06e9d0-29c0-47ae-ab25-11e58fa104ed	c652a5e4-54ad-4274-9454-38525398b759	002	2024-10-28 16:12:51.139	2024-10-28 16:12:51.139	t	0
31c77d5d-534b-4be3-9c08-bab8abf8cac9	c652a5e4-54ad-4274-9454-38525398b759	004	2024-10-30 16:12:51.139	2024-10-30 16:12:51.139	t	0
5d673308-bc44-4ffb-9747-a25673237824	c652a5e4-54ad-4274-9454-38525398b759	007	2024-10-30 16:13:51.139	2024-10-30 16:13:51.139	t	0
99e77db6-e25a-4a5e-8b45-36f25313d09a	c652a5e4-54ad-4274-9454-38525398b759	006	2024-10-30 16:12:55.139	2024-10-30 16:12:55.139	t	0
b5d47430-4618-426d-a5c1-b190ada08993	c652a5e4-54ad-4274-9454-38525398b759	I just call~~ to ssay~~~ I love you~~~~	2024-10-29 16:34:25.154	2024-10-30 17:00:31.128	t	0
fb80924e-df40-4600-a4e3-177728a38325	c652a5e4-54ad-4274-9454-38525398b759	005	2024-10-29 16:34:19.261	2024-10-30 17:14:50.163	t	0
de545fc6-3a1c-4984-8a79-41126f2ab1cc	c652a5e4-54ad-4274-9454-38525398b759	set	2024-11-26 02:03:46.458	2024-11-26 02:03:52.931	t	0
d62edcf6-ec3f-497b-b153-60708902b0c4	c652a5e4-54ad-4274-9454-38525398b759	new	2024-11-26 02:03:36.354	2024-11-26 02:03:54.27	t	0
b9da2f74-3b7e-43ca-8b8f-17c1b644594d	c652a5e4-54ad-4274-9454-38525398b759	abcd	2024-11-26 02:11:14.009	2024-11-26 02:11:17.704	t	0
5c31d278-5cfa-46b1-bcc4-fc178798fd6e	c652a5e4-54ad-4274-9454-38525398b759	test	2024-11-26 02:11:21.575	2024-11-26 02:11:23.692	t	0
029e7dac-1918-45b7-9193-192f5c881e1e	c652a5e4-54ad-4274-9454-38525398b759	aaa	2024-11-27 02:11:03.469	2024-11-27 02:11:08.946	t	0
f5183e74-d53f-4f48-a333-ce43a1e6a2da	c652a5e4-54ad-4274-9454-38525398b759	a	2024-11-27 02:11:45.585	2024-11-27 02:13:57.797	t	0
610dd477-6f00-432c-ae08-8bffcc7d8d4b	c652a5e4-54ad-4274-9454-38525398b759	qwr	2024-11-27 02:38:22.434	2024-11-27 02:38:24.629	t	5
9d0a90bd-54c4-4a34-a701-59d0388115f7	c652a5e4-54ad-4274-9454-38525398b759	abc	2024-11-27 02:38:13.768	2024-11-27 02:38:25.471	t	4
76dca60f-f7cf-4956-a254-e3eb7a5bf6a1	c652a5e4-54ad-4274-9454-38525398b759	eoeo	2024-11-27 02:38:16.27	2024-11-27 02:38:26.323	t	1
70de6cad-6d77-4d74-a77b-53cb18f371fa	c652a5e4-54ad-4274-9454-38525398b759	b	2024-11-27 02:14:26.125	2024-11-27 02:14:37.504	t	0
72a07e3f-e726-425f-8f71-b5c8d3f9cb5f	c652a5e4-54ad-4274-9454-38525398b759	a	2024-11-27 02:14:14.701	2024-11-27 02:14:38.414	t	0
456324b3-3261-44a8-a200-f934d5e4cdec	c652a5e4-54ad-4274-9454-38525398b759	a	2024-11-27 17:40:06.846	2024-11-27 17:40:09.539	t	6
9043c924-89c1-4240-9949-3338bfb486c2	f144cc78-34d9-4d0a-9e95-48cf7102dce3	something goood	2024-12-26 17:38:17.528	2025-01-06 07:19:28.984385	f	0
2c11f238-f42f-4d80-b3a9-e1359e40379b	f144cc78-34d9-4d0a-9e95-48cf7102dce3	say something	2024-12-26 17:40:52.972	2025-01-06 07:05:39.313	t	0
0f81f55d-b1c1-4ca6-801b-fae291ad5c2c	f144cc78-34d9-4d0a-9e95-48cf7102dce3	something test	2024-12-17 17:44:53.082	2025-01-06 07:29:56.268228	f	1
4d6b854f-75f6-4c20-aedd-33187a617ff8	f144cc78-34d9-4d0a-9e95-48cf7102dce3	123	2025-01-06 07:13:26.343	2025-01-06 07:29:56.272354	f	3
7843f003-4e32-4caa-a616-8ad0c0c81810	f144cc78-34d9-4d0a-9e95-48cf7102dce3	234	2025-01-06 07:15:16.473	2025-01-06 07:29:56.271899	f	2
f3f244d8-c71a-4cb1-8e46-505671f63bcd	c652a5e4-54ad-4274-9454-38525398b759	킥!	2024-10-31 14:56:23.694	2025-01-06 07:34:54.218422	f	0
371bda8e-988e-44f1-b27d-fbdd8e3551bf	c652a5e4-54ad-4274-9454-38525398b759	드럼!	2024-10-31 14:56:26.209	2025-01-06 07:34:54.240154	f	1
\.


--
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: benny
--

SELECT pg_catalog.setval('public.migrations_id_seq', 9, true);


--
-- Name: migrations PK_8c82d7f526340ab734260ea46be; Type: CONSTRAINT; Schema: public; Owner: benny
--

ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY (id);


--
-- Name: category PK_9c4e4a89e3674fc9f382d733f03; Type: CONSTRAINT; Schema: public; Owner: benny
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY (id);


--
-- Name: todolist PK_ad126e5bdbcae6306ea2266a1f2; Type: CONSTRAINT; Schema: public; Owner: benny
--

ALTER TABLE ONLY public.todolist
    ADD CONSTRAINT "PK_ad126e5bdbcae6306ea2266a1f2" PRIMARY KEY (id);


--
-- Name: todolist FK_b927e96b3f463746f6fbf3893c3; Type: FK CONSTRAINT; Schema: public; Owner: benny
--

ALTER TABLE ONLY public.todolist
    ADD CONSTRAINT "FK_b927e96b3f463746f6fbf3893c3" FOREIGN KEY ("categoryId") REFERENCES public.category(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

