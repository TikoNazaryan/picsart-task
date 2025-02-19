import { IUserState, UserActionTypes } from "./types";

const initialState: IUserState = {
  users: [
    {
      id: 1,
      name: "Ashley Williams",
      email: "ashley.williams@example.com",
      age: 29,
      description: "Voluptate aliquam quos ut doloribus iste.",
      created_at: "2019-11-30T02:28:47.898Z",
      updated_at: "2023-05-08T13:25:44.321Z",
    },
    {
      id: 2,
      name: "Christopher Harris",
      email: "christopher.harris@example.com",
      age: 36,
      description: "Quam consectetur accusamus fugiat ipsum.",
      created_at: "2018-04-17T01:12:38.929Z",
      updated_at: "2023-05-08T19:10:32.665Z",
    },
    {
      id: 3,
      name: "Jennifer Martinez",
      email: "jennifer.martinez@example.com",
      age: 44,
      description: "Quisquam autem consequuntur molestias minima et.",
      created_at: "2022-02-10T11:05:19.523Z",
      updated_at: "2023-05-07T18:47:56.816Z",
    },
    {
      id: 4,
      name: "Brandon Garcia",
      email: "brandon.garcia@example.com",
      age: 49,
      description: "Culpa id ex iusto ut consequuntur.",
      created_at: "2020-08-23T04:57:11.712Z",
      updated_at: "2023-05-08T02:31:10.106Z",
    },
    {
      id: 5,
      name: "Emily Taylor",
      email: "emily.taylor@example.com",
      age: 19,
      description: "Quas voluptas ut est nihil eaque.",
      created_at: "2021-06-18T14:10:55.309Z",
      updated_at: "2023-05-08T07:52:21.983Z",
    },
    {
      id: 6,
      name: "Daniel Clark",
      email: "daniel.clark@example.com",
      age: 22,
      description: "Est sit adipisci officiis exercitationem voluptas.",
      created_at: "2019-02-28T08:43:30.935Z",
      updated_at: "2023-05-08T16:34:47.556Z",
    },
    {
      id: 7,
      name: "Jessica Lewis",
      email: "jessica.lewis@example.com",
      age: 36,
      description: "Velit quod maxime architecto ipsam enim.",
      created_at: "2020-12-15T20:29:03.227Z",
      updated_at: "2023-05-08T09:56:18.614Z",
    },
    {
      id: 8,
      name: "Michael Robinson",
      email: "michael.robinson@example.com",
      age: 28,
      description: "Nobis dolorum nesciunt nemo repudiandae ea.",
      created_at: "2021-10-31T17:14:08.426Z",
      updated_at: "2023-05-08T15:06:47.741Z",
    },
    {
      id: 9,
      name: "Sarah White",
      email: "sarah.white@example.com",
      age: 50,
      description: "Mollitia amet non ea architecto temporibus.",
      created_at: "2020-04-04T04:20:42.888Z",
      updated_at: "2023-05-08T18:58:11.203Z",
    },
    {
      id: 10,
      name: "David Lee",
      email: "david.lee@example.com",
      age: 35,
      description: "Voluptatum error qui sequi aut voluptas.",
      created_at: "2020-09-14T07:12:55.877Z",
      updated_at: "2023-05-07T23:15:39.991Z",
    },
    {
      id: 11,
      name: "Stephanie Brown",
      email: "stephanie.brown@example.com",
      age: 65,
      description: "Ipsa aut eum quaerat aperiam quam.",
      created_at: "2021-04-22T01:43:49.654Z",
      updated_at: "2023-05-08T06:06:26.393Z",
    },
    {
      id: 12,
      name: "Matthew Johnson",
      email: "matthew.johnson@example.com",
      age: 58,
      description: "Omnis et officia explicabo consequatur cumque.",
      created_at: "2019-08-09T10:22:27.419Z",
      updated_at: "2023-05-08T01:21:05.209Z",
    },
    {
      id: 13,
      name: "Amanda Wilson",
      email: "amanda.wilson@example.com",
      age: 43,
      description: "Eos omnis non voluptatem voluptates sit.",
      created_at: "2020-03-01T13:30:20.875Z",
      updated_at: "2023-05-07T22:01:28.445Z",
    },
    {
      id: 14,
      name: "Ryan Thompson",
      email: "ryan.thompson@example.com",
      age: 37,
      description: "Soluta explicabo illum dignissimos labore impedit.",
      created_at: "2021-11-27T18:38:59.662Z",
      updated_at: "2023-05-08T14:40:02.849Z",
    },
    {
      id: 15,
      name: "Melissa Hall",
      email: "melissa.hall@example.com",
      age: 24,
      description: "Ratione dolor et sapiente nulla eum.",
      created_at: "2021-09-10T02:19:52.581Z",
      updated_at: "2023-05-07T19:43:16.216Z",
    },
    {
      id: 16,
      name: "Joshua Carter",
      email: "joshua.carter@example.com",
      age: 20,
      description: "Ut sequi vel accusantium laboriosam ea.",
      created_at: "2020-05-12T08:57:06.714Z",
      updated_at: "2023-05-08T03:51:49.164Z",
    },
    {
      id: 17,
      name: "Megan Adams",
      email: "megan.adams@example.com",
      age: 30,
      description: "Repudiandae doloribus quos dolorem sunt et.",
      created_at: "2021-03-28T21:03:24.142Z",
      updated_at: "2023-05-08T11:22:38.056Z",
    },
    {
      id: 18,
      name: "Justin Moore",
      email: "justin.moore@example.com",
      age: 41,
      description: "Non minima aspernatur ipsam nihil repellat.",
      created_at: "2020-12-28T06:34:35.610Z",
      updated_at: "2023-05-08T17:47:54.502Z",
    },
    {
      id: 19,
      name: "Hannah Walker",
      email: "hannah.walker@example.com",
      age: 33,
      description: "Ducimus ut est aut dolorum commodi.",
      created_at: "2021-05-14T14:47:38.623Z",
      updated_at: "2023-05-08T06:56:08.952Z",
    },
    {
      id: 20,
      name: "Robert Anderson",
      email: "robert.anderson@example.com",
      age: 29,
      description: "Sunt odit ratione recusandae debitis voluptatum.",
      created_at: "2020-01-09T11:48:32.065Z",
      updated_at: "2023-05-08T00:40:43.744Z",
    },
    {
      id: 21,
      name: "Julia Scott",
      email: "julia.scott@example.com",
      age: 27,
      description: "Consequatur ut eos sequi maiores voluptatem.",
      created_at: "2022-01-03T15:29:22.987Z",
      updated_at: "2023-05-07T21:34:02.928Z",
    },
    {
      id: 22,
      name: "Kevin Hill",
      email: "kevin.hill@example.com",
      age: 57,
      description: "Quia repellat sint reiciendis doloribus facere.",
      created_at: "2021-08-05T06:53:59.217Z",
      updated_at: "2023-05-08T12:42:51.394Z",
    },
    {
      id: 23,
      name: "Amy Young",
      email: "amy.young@example.com",
      age: 37,
      description: "Temporibus ut autem aspernatur eius voluptatem.",
      created_at: "2020-06-28T17:31:24.940Z",
      updated_at: "2023-05-08T08:18:37.725Z",
    },
    {
      id: 24,
      name: "Eric Baker",
      email: "eric.baker@example.com",
      age: 26,
      description: "Eveniet autem rem est eius nisi.",
      created_at: "2021-12-01T00:59:37.417Z",
      updated_at: "2023-05-08T10:28:26.126Z",
    },
    {
      id: 25,
      name: "Nicole Reed",
      email: "nicole.reed@example.com",
      age: 31,
      description: "Repudiandae eos eligendi quia qui aliquid.",
      created_at: "2020-11-07T10:41:01.880Z",
      updated_at: "2023-05-08T14:05:01.429Z",
    },
    {
      id: 26,
      name: "William Brooks",
      email: "william.brooks@example.com",
      age: 45,
      description: "Ut ipsa aspernatur et reprehenderit qui.",
      created_at: "2019-07-19T21:13:38.341Z",
      updated_at: "2023-05-08T03:09:54.810Z",
    },
    {
      id: 27,
      name: "Laura Phillips",
      email: "laura.phillips@example.com",
      age: 43,
      description: "Asperiores autem necessitatibus quos autem doloribus.",
      created_at: "2021-01-29T05:35:08.833Z",
      updated_at: "2023-05-08T17:22:27.159Z",
    },
    {
      id: 28,
      name: "John Parker",
      email: "john.parker@example.com",
      age: 47,
      description: "Velit iusto id sed dolore consectetur.",
      created_at: "2020-02-21T08:22:49.414Z",
      updated_at: "2023-05-08T13:49:16.567Z",
    },
    {
      id: 29,
      name: "Catherine Lopez",
      email: "catherine.lopez@example.com",
      age: 38,
      description: "Adipisci non modi quo libero quaerat.",
      created_at: "2021-07-04T19:15:31.711Z",
      updated_at: "2023-05-07T23:59:10.864Z",
    },
    {
      id: 30,
      name: "Jordan King",
      email: "jordan.king@example.com",
      age: 23,
      description: "Quis et dignissimos libero rerum velit.",
      created_at: "2020-03-25T13:00:34.250Z",
      updated_at: "2023-05-08T16:59:36.070Z",
    },
    {
      id: 31,
      name: "Katherine Wright",
      email: "katherine.wright@example.com",
      age: 29,
      description: "Dolores repellendus officia voluptas iure animi.",
      created_at: "2020-10-07T02:33:17.186Z",
      updated_at: "2023-05-08T08:47:47.493Z",
    },
    {
      id: 32,
      name: "Jonathan Hall",
      email: "jonathan.hall@example.com",
      age: 34,
      description: "Voluptas corrupti aperiam magnam earum rerum.",
      created_at: "2021-03-01T23:56:59.978Z",
      updated_at: "2023-05-08T14:34:02.011Z",
    },
    {
      id: 33,
      name: "Lindsey Evans",
      email: "lindsey.evans@example.com",
      age: 39,
      description: "Sed fugiat ut beatae in necessitatibus.",
      created_at: "2021-12-29T16:17:48.370Z",
      updated_at: "2023-05-08T00:20:59.753Z",
    },
    {
      id: 34,
      name: "George Cook",
      email: "george.cook@example.com",
      age: 40,
      description: "Quos quis rerum exercitationem laboriosam repellendus.",
      created_at: "2020-09-28T04:53:17.623Z",
      updated_at: "2023-05-07T21:13:38.855Z",
    },
    {
      id: 35,
      name: "Karen Morris",
      email: "karen.morris@example.com",
      age: 52,
      description: "Ut rerum ipsam velit ad impedit.",
      created_at: "2020-08-17T09:58:28.663Z",
      updated_at: "2023-05-08T16:10:15.209Z",
    },
    {
      id: 36,
      name: "Alexander Rivera",
      email: "alexander.rivera@example.com",
      age: 28,
      description: "Et qui asperiores voluptatibus voluptas tempore.",
      created_at: "2021-02-16T05:51:46.126Z",
      updated_at: "2023-05-07T22:48:40.744Z",
    },
    {
      id: 37,
      name: "Cameron Wright",
      email: "cameron.wright@example.com",
      age: 25,
      description: "Laborum ea ex placeat architecto quam.",
      created_at: "2021-04-04T16:34:17.645Z",
      updated_at: "2023-05-08T11:58:27.450Z",
    },
    {
      id: 38,
      name: "Sharon Perry",
      email: "sharon.perry@example.com",
      age: 48,
      description: "Dolorem quia omnis adipisci voluptatibus enim.",
      created_at: "2020-07-14T18:20:52.731Z",
      updated_at: "2023-05-08T00:57:17.084Z",
    },
    {
      id: 39,
      name: "Timothy Turner",
      email: "timothy.turner@example.com",
      age: 42,
      description: "Consequuntur voluptas distinctio labore ab.",
      created_at: "2019-12-24T09:30:36.015Z",
      updated_at: "2023-05-08T19:04:12.308Z",
    },
    {
      id: 40,
      name: "Christina Ward",
      email: "christina.ward@example.com",
      age: 32,
      description: "Recusandae dicta omnis possimus consequatur voluptatem.",
      created_at: "2021-08-22T02:44:12.944Z",
      updated_at: "2023-05-08T03:27:22.711Z",
    },
    {
      id: 41,
      name: "Benjamin Mitchell",
      email: "benjamin.mitchell@example.com",
      age: 39,
      description: "Dolorum minima qui at asperiores non.",
      created_at: "2020-05-26T03:37:41.918Z",
      updated_at: "2023-05-08T16:06:37.162Z",
    },
    {
      id: 42,
      name: "Courtney Richardson",
      email: "courtney.richardson@example.com",
      age: 48,
      description: "Quod enim qui qui architecto impedit.",
      created_at: "2019-11-13T12:50:44.528Z",
      updated_at: "2023-05-08T11:18:30.826Z",
    },
    {
      id: 43,
      name: "Russell Walker",
      email: "russell.walker@example.com",
      age: 34,
      description: "Voluptatem qui consequatur modi autem voluptatem.",
      created_at: "2020-03-17T19:29:53.306Z",
      updated_at: "2023-05-08T20:10:53.513Z",
    },
  ],
};

const dataReducer = (
  state = initialState,
  action: UserActionTypes
): IUserState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default dataReducer;
