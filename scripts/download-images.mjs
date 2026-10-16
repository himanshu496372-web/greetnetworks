import fs from 'fs';
import path from 'path';

const images = [
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvHk9MbaIMcbrlbFxtFYAAaQ5jku7Zf9ccJSIm5AbWEALKs6flamvqqBVfCmUj_C2HZlBzvgZCu4CFW4vZPsucSHk6Hip24zhudHNuxFbhYwEHrvG2I_CVvbMVhaEdNpMNo2CcC4xjsdtqwoSudYyHDZQ9FPmEI4efQ3DGxX271nT6_mPiOAcfxmLi11ITkRTbOVx-b4tj1I-s9DaPToLTH601Z3tXniAfoBvNHqqlPN_QrFHXX3hE',
    filename: 'speaker-active.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9gv4v-As3mzVJghCb_im771TioPgPuOF_y_yq6_cbfd7NIgVQwJKMTquqtRAha-tHe5McqW77DdwDxetTZdVba-quEPWWL5oWLGTnci35w2L1O8Bc2t3iWPbvRwbJvqYwkPBQAQiE5CVTfzXL-DU0YcJQiHWRug3y_9cq4w7PRPH4ATHNDPVcC07HlTRZC38FPVbkeYPQ3_omwXS0XNNSUsmsNJgCOZFrggMtCSCqROVtRC0vlW_E',
    filename: 'peer-listening-1.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfwenACajL1zXA9GGEOOtDrVNdLWc6hEKC08FG5o8wU5bmynT9ZwGEBTEr1_-xCJcN2kRwMi_CBSvrps-x2Nv7-tPHSByj969MwtWzQglT4V_3xky8VVIb3oKcEqP1q9OBvOqHD3jgq5L33g79SmxBen-KRzUVmXy-t2EN10qKTFk2X71LMRQxTUK5iDC6dbgK6NLxhZX41Mn0XayM5qJTpQelJ4bXQv4Fzt7mxExOdj-ieC7koqbH',
    filename: 'peer-listening-2.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAD3eGisu3HDTjcyNuzzqz-AwSgbw2F1DVpCcnox6-o3dm3opg_NCI6bdqr02cosypLgPmPm7ce4PLL1x2kZcUBqsios9tp5C9vd9THusiZOmYY3Yk3Lhkzd3qJ-5uANBSoWfouRv9uqpPlFQ08yaP7fsMCgA9ILU3bAjY4GqrCm7aAGWdADtfzMnJwyT4ISvXU8LNtmok3_LL7p-owBFFcrYd1dt3gI7tP6UlYvX3b7-YNYoTEN6ZL',
    filename: 'peer-thumbsup.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDA2ftF2KmkDo6JkRDq14chKSnTit2PKvLjz-3ZLxDmzUzEYpRb7Qifr03aIgZ_UM26vm4mj-OQCaJUWsf9YSIWS_VnHYtgq5UlC9JfGNWsfg19vu7D39aEXAgwd07ZWX2PR540zMJQaYR32and0iRFfgtbXAKWgIzoSNk1XzrxdEZ-zkFEwShp7Kw8D9VVs57LQJDSF-ywLSANbbvLGXj9Cs2EPv-Ug7iIBefrC3tfCXEbDeX_E3H1Ox-pPMn2nwDdng',
    filename: 'peer-speaking-headset.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACg3dXaSP8cy97V4oVHvrkALz0DXZrfgHJ1jHFHZxmnytaAaOJ8x4xM9xyWkEcJa8zV569C_--hkUZsDs5I1HB51qQlgBTDo4RJBPdTgWpJvZuOPbZso6ixi1dZ-NN09zUqiqIK9DUQ9RpMFGOxiPcotq5Q9j2iuVDF-Vu2uFLFxng8_X4j9x7zHP-nfBKAWw4n-LofAeeWjOwy28Iwq9w38NA1gY0qWeZoBYskDXCDtP_r1gy1Dv9',
    filename: 'peer-smiling-sweater.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJtop6af18T2UJRgsd7WgkQay9ShbWpeRx5-t0HocXc05TRYvUCujK8CqSWJ3sClPgL7Z7IW_Zn8zibmSjpnmvewQSIAZbZMCu7wYBqNrRk1DXi8skQnlIAddq1VxnHHEgCR0mF50S_kSQn-SxU4LwAEb2ZMOfpvWeHKzoDaoBgvAJe_S8OhwrchCd9tIXxB8uoQev6DhWWQa5VODaRSV4LRTB1-z_WWq4HJF7BZ1zx4HsMTpmI-hU',
    filename: 'peer-attentive-listener.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHrdnZqPMyMQcpoc-7a1WEIdw1mVvPERKqfC44W-NPn3vX_CMUkxBKzNQkjNqNW8xtoHbUGhuhyKPwcBOVAXGSZlRIeRv9S_FpPxpNVvsVJXEAUBQ2VJTIhVuNrTbgfP7teT8c__f5sasfXx-RuHr576OqBoXgKSzGmL1Ux7lJnbnSy92anAXoe9VSBHMBsPrjsHIxhqXSv3aZnnv8JeZc0mNRVO87RrwVBGuuajWZs5gy2mRzhB4v',
    filename: 'peer-participant-headscarf.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfFofMC7BtJUKcA2hlSxzxXkWbboQ_6sONdlAKGTjXiQWt11xBM4nUMauv8YfVw7O4uW1qr88nt4CkqqeEtqpBS6bIwGMHELLNXQqE6hS_MADBpmBrLTVrwJ5Pfy4txurS05zbk5CjJSqdABSteU7L8u_XuBHzpx44taCPFdHNm1ymma63ygDGLIlwdGU5hiZxZPS7H1y5hlk4v3gUamu63So8AMO6I7fpRXhgx7BB7wBIOcd-aliJ',
    filename: 'peers-conversation-pair.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida/AEtjO1WhubCXNrqJoYTvecFhrVsCgw2rUwjisNZ0rEh7LV_oj_kRWmLgN69OMkDX1feKkPOpQ_vn036D4OP6cZJu1WAZ1y3kffUotoEg-RxCvx7reljPHmSPlQ-P4lLhL3-fY9bOTNFKHG3V-RnlbB51FCOzafiP03LqeRzJAVQZe3rfqr5C6SsJBgMYK-QssvG43mGP0veBXEZjjzw279ikY6xtJJrlluwCRzXQG4jsHYf_ByM_tgkkWLUwEg',
    filename: 'drill-sheet-breakout.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAshYasarM_HVYFhglPI2jhU8FTXpm6d5aeSbbXL1YSv1ClK2FGtFJ3vPD_pqOTrQAdeoAE2F9pMIgh4FCtJX3-xaFHRXRkmf3lz4APvMyIKb5cICP9Dewj49Q9DKNXaAnXglcvumb43K4Jd5MbdEhmey25Y4tEImjA6reb40HkEtoJQLNCHondOedjHwoV4swp03DgKHmPUYTFCG0dWeAegWEuVcfqr_wrTD31L7GidSly4sNRoS4p2QUKrUCwV52yw',
    filename: 'community-group-frame.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9sf0JuMkj8gdxX0M6RE6LVD0IxAl16t_dwl79JFkp9VMca1XvUWym10dztO3J4_XLfqFpFJzCWAEUZHGD3NOdHBRifl7XEKQDurXgHxo9ynEryhj_lpfLPalt7DLHhLnV7alvzSCzx_wl7Ia12E2p9ihnWCHoCat8xc-P_89Ir1GEiYHVAcnxySWYYfC3FAwZLDvV9ihzCkIdxyKE12tWkizcgSWXCNpUduI4AOPlJzvDjhjEiEWD',
    filename: 'breakout-room-quad.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCn3KbELva_-UifWLP4nIh5nPdZ7joJT9ZwtJZnys0I7IkGtps3ub4mBNDDxvpAByREaJnLDZwC2uRxAP8G9pwoko-LyYfWM6PvfAkim7C9vpHMFNtmvhk0MHrCI1m08jt1TSFc289VrmNhQSngHEztv0_Kh9akEWq8YEx1wgbBY9aiibqCdmIKBRrFlgvMQnINSUtdBDkzuMDXqjpmxJz30QW-Xvc56YUBaeIk7TZCkvIi04xjirFK',
    filename: 'networking-drill-trio.jpg'
  }
];

async function downloadImages() {
  const dir = path.resolve('public/images');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  for (const item of images) {
    const dest = path.join(dir, item.filename);
    try {
      console.log(`Downloading ${item.filename}...`);
      const res = await fetch(item.url);
      if (!res.ok) {
        console.error(`Failed ${item.filename}: ${res.statusText}`);
        continue;
      }
      const buffer = await res.arrayBuffer();
      fs.writeFileSync(dest, Buffer.from(buffer));
      console.log(`Saved ${item.filename} (${buffer.byteLength} bytes)`);
    } catch (e) {
      console.error(`Error downloading ${item.filename}:`, e);
    }
  }
}

downloadImages();
