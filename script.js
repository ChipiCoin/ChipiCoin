const walletGroupsContainer = document.getElementById('wallet-groups');
const sumarryBar = document.getElementById('sumarry-bar');
const summaryText = document.getElementById('sumarry-text');
const summaryTextC = document.getElementById('sumarry-text-c');
var currentTheme = 'light';
sumarryBar.style.width = `${0}%`;
// Sample dictionary of givers (replace with your actual data)

const extraSmallGiversMaxVolume = 448500000
const smallGiversMaxVolume = 138000000
const mediumGiversMaxVolume = 69000000
const largeGiversMaxVolume = 34500000


const givers = {
    "largeGivers": [
        { "mainAddress": "EQC22NBqhY40-EnFyRM7NqabQAl8UDm5vlBmU9hp8UuiOY3X", "jettonAddress": "EQAxWugCqwzvE22MSKSH-S6koHHPil7icW3oSQKWkYYxqeJb"},
        { "mainAddress": "EQDqkSjKoZ7FzqBnLKyQQ32YdIPDA3hBJ-RsE2cB3GuBcGeh", "jettonAddress": "EQDEZJD5VIiaXwG4xgsPlWX4oaMBlnNg0c-ih_Z4wmc1UiEE"},
        { "mainAddress": "EQDsmgQI6ohDF_61KzEoM079onAYJYmWNMaaRyYITt2hTa5V", "jettonAddress": "EQBA9sQcXQFX4x2IkdYyZ_x5vMesa-Hj1I4PpV-cGArkxJHk"},
        { "mainAddress": "EQDankjYlhFt_bTiwLAOxIgI5UytTp7rutKtBjBlRODVPViH", "jettonAddress": "EQCh7obHGQDwD3gkjPept7jEE3TpgyIfY9crB7wI3NVXDwg1"},
        { "mainAddress": "EQCcU0hCj_axXVmrMmIVEZvp51dp3y1YPS7fRf_KcYTwUH7R", "jettonAddress": "EQBC6DM2rpft7O7gUTq0gp60d0xfVxBZi6mnoSj5xcL_xBPY"},
        { "mainAddress": "EQD3N5JEbqG09qBpDCQrT_6ONQvSQMwG--XAosCvztV-d1Bf", "jettonAddress": "EQCgUGDaOqUKBXLPciqUxpvmG1wwTZpkHTZKH_fK_Y7YpNLs"},
        { "mainAddress": "EQA4pKr6necoQdY_OVHRyRo4D5Qkn4VUCCpmn0zmugDR9ISL", "jettonAddress": "EQDkpVxuAa3PyX4kK184aOwvHMRtRKe-AF8uCwk1g_iStRBY"},
        { "mainAddress": "EQBvevLcKWl-CpKpyavPE7tXl1UMc1J6ULiwF1dMFA7lVzRY", "jettonAddress": "EQBOnSn2zp2wITgAwtjuOVh3IGic0beS9S2-uXZgwux27GtO"},
        { "mainAddress": "EQA38YrXUWsEFTISwZoGBlz8VoqvmIVfYCOij8fHnQOpwm-D", "jettonAddress": "EQA87snRkpeahHtps3chmvViOrNaKQxU4aCWpwT2rUSO3sEg"},
        { "mainAddress": "EQDO8ydDOcnJDbG8nBm50-v6R54fidkyUGU3377YHCyyJ3rV", "jettonAddress": "EQDhV1z4KvJx14GbePo652qRZEgxNdixQEdb4lgxQmtohfh4"},
    ],
    "medium_givers": [
        { "mainAddress": "EQBRIpzVOcti35yqhtqdYhSXafr3EGWmlkzsMS5z_52m6JP4", "jettonAddress": "EQB0us8nNd0UkWl-a0JHqRahtOrbAvS44v3D8yWRr_0EoSEw"},
        { "mainAddress": "EQBf6Dlx5a_-EBfGuK9iqptvebc8aB16vFYY72xd3afTurLD", "jettonAddress": "EQCQkqk6_KK6rttufFS7L4GZDngZrfjf5Mx46vfHCbe6X_yr"},
        { "mainAddress": "EQBiPJRtxuFThiBuhtdJiSwwu6BKLpb3d7MhBZcWvDgpsbDZ", "jettonAddress": "EQBDSDfXignHI0Zyh0MBvqBA4SkLy6DQbcZi7TrVrukA2GJG"},
        { "mainAddress": "EQBqdBeqGPPTXjuJVmFtY34S0W6mnTme7fB3BWTPH5gYdG0y", "jettonAddress": "EQAd1fCfEpvsBi_Xhz3ilb-4WyqWJR7mAQzFCMIYKS3iH2Af"},
        { "mainAddress": "EQDq-jMFWjClzL5GvEjSyTLIy86PYrxrzf-_FDvbdHIvDBwX", "jettonAddress": "EQAtdh6874jRrxWA4k0eQj0-wNnkrZmplxKtyFCdiAL2cyb6"},
        { "mainAddress": "EQCMSvz6S61trlBVIIGykf4bgQqcGMDx2UK4mxxNBLWu433z", "jettonAddress": "EQBQ4fxhQRGo3KY9a_wqVf6b3eo_2dTmqPVs9N1ZxvDzmrVB"},
        { "mainAddress": "EQAbKk2bCkd32F0Qwvg-U4HzGPw0wzfWFJFDE8ivsKSxg0j-", "jettonAddress": "EQCG9YvqaZ9a4E6oecKnOz5DAQJAlY2z7WRSetbJ8rsdKZEZ"},
        { "mainAddress": "EQDfc41LT-GRkuHIKtPVAzGYdsyh5q30QPVtb2hTdiXJV2x-", "jettonAddress": "EQD-ZAA-fADu55BCJJ_NxosPc4G_kmHFb3m5kRt7AJltCRw8"},
        { "mainAddress": "EQBXk9AwSt1johXPzqi6XW_VxJ3S4z0S_Cqm7d4HlERqaLRx", "jettonAddress": "EQC4IEEXGwcNMcttW8hhv4lQxbWWjizrsY9KNAtlJbUyG8Dd"},
        { "mainAddress": "EQAfcub5mRBXbUtNNjhiNnoI6sGVlFif3YD0NCmZ2mwZ_l9c", "jettonAddress": "EQCBlpQRP54Qcg_B2f7EQ_lthqqocw0ZMJx7JPX8cnCdb96-"},
    ],
    "small_givers": [
        { "mainAddress": "EQCigp6lIDQczWqOUzx-F4v3xC-zfhT7u6qL24J-AjyGCfKV", "jettonAddress": "EQA5o5Rzh9gcvJk9m_MjUjooqM4ujc4xc899IMCN4tQCQH2y"},
        { "mainAddress": "EQDgo1JJPsfuRyA7VQQcjYJR97X6b7TOexbp_ZWTxBik6GyV", "jettonAddress": "EQDeWxGigl_Yp1jt_C3nlxW6PzfuCiVkERSfYyZQHb9YhHur"},
        { "mainAddress": "EQABByrez7pfMwGoiVKpuixKJ5vSUoGU6QxqIesMEtcKMAHo", "jettonAddress": "EQCLDLsWbhyG_IyHpjaNcAkpJpFRBE440eweqqJuAiZmHCjb"},
        { "mainAddress": "EQDck3kSTpjIhVXpY3EoEMv22CECji2_f560JA3M36HgPcpY", "jettonAddress": "EQCzZTfdeG0f3NZw85R9p5z6C7o_HLNFNJ8_njqZhkyk-VaJ"},
        { "mainAddress": "EQAd9fltUkePQvVhnhEpMuaXBu-85ItlAfmjNrTfNY0RKFds", "jettonAddress": "EQBvHdzpcETv2hHZ-UBofN9Cg3boy82Nirx5M5ENPCpM4X7l"},
        { "mainAddress": "EQAlqCcuXaWJ4dVB_WerZMBLEwcsyPAgZPMZgkQ-Kn6QZCVN", "jettonAddress": "EQDC_cvq9VeuGWgFVsMHIImUdPgdH5_yevsRhqc6l-Pg4RT_"},
        { "mainAddress": "EQCi5IohI4b0QlN28teBNr63hz8h1S_N_hgxMpQU4iKeAy9I", "jettonAddress": "EQDky2zJXzAX3dE2CXyzv3px7Jd4i9w-LGQsaD3Be3bw88xx"},
        { "mainAddress": "EQDZFuPM48TpHKBrNjxpBuTTyDRKcAx-q3jJBI1Ey44q1aRP", "jettonAddress": "EQBepP7kCh8oHzQArI1YOZ9uS_qskAEATobNKXUlTcLFHMvL"},
        { "mainAddress": "EQAEguyqaaf5B754jzGAOq4l2Ax-s4Gkpby-fC6mMXDC5bQC", "jettonAddress": "EQCl9p42sF1NV6Dltlxzt9mdK64bDckqkwDz77gPYVYrEJ-1"},
        { "mainAddress": "EQAOS1ZwDtx9U69K5NpvnSHU3gRuaqjaPYuUdrFAgLcGG7K-", "jettonAddress": "EQBCdsGGHf1qMsAzuAvEdOYR8Nk5nOEyleBcsZtO-ZQPTsyb"},
    ],
    "extra_small_givers": [
        { "mainAddress": "EQAIGrlB3pI9lNvroYy1WZ8pcUkTfw5ao4DNS00DjG-WPJGm", "jettonAddress": "EQCJx2NXBAe3XQxZ7FGIsoWAP1Mjlf39-m79stBpKi1tNiJv"},
        { "mainAddress": "EQB5uZs87WoAc1E1NXXOi3soxAGDF2e-BRs3mjrp-WWCCFsI", "jettonAddress": "EQBGUXgVq1u9VnQavJPBi6kNBKXmUo-yeu0TC5xAnur4YF_1"},
        { "mainAddress": "EQDy1M1ilstLeg2WoKkpWFS8TyZh7AA_YU6Auo7NDqU6t3Q4", "jettonAddress": "EQAX-Gr9gjQCMRn_9K7dDjhzPhKJ6PjeH9nNN75Dv-wKzC2_"},
        { "mainAddress": "EQAJIjc4Nzvz_WD2w8W9ErOrDJToOFJqhElAPGyfrMSeJM5r", "jettonAddress": "EQDQz865AinIET6nE4UtCQsR8rwsUpV0RZ_x-KIIoVBfTe47"},
        { "mainAddress": "EQDoB2ldyX1fyTocPrbYEocZlNBw7FUgriM9cYW7vPBcBg8u", "jettonAddress": "EQBC3UBA9Q-kU5DpWnzejMIbUGx3rDFz8dQ-xwVfqxTOJmI2"},
        { "mainAddress": "EQBEswSuc-ypLLCfChquda3VkzcIKi6lfaBAcK3_9tYLbeAF", "jettonAddress": "EQD0Yq4RdHxRgkc8YYJcrRuO_vznGctUoWkhYH_1Tx662aI0"},
        { "mainAddress": "EQA5CW-2FGD63Wxvx8uwKWws_PyyYRENlHz_WVX7cdi1GT1v", "jettonAddress": "EQBx4ul120UNbArFJr-jKnTOmaEOiW19ZdAexIrZDXhx53Qs"},
        { "mainAddress": "EQA9BgWftC9HU655G6HW1KolU7Qyohwig2sgptx0NRF58zep", "jettonAddress": "EQDGdB5qbQ--YxDG9UWb-HWExbimSzpRpJ6lSnQmTwE12K4P"},
        { "mainAddress": "EQAA7f1Z9mAD--KQYtAMoj7sYtcSkZ1Is5kcUdcFr9lJvURt", "jettonAddress": "EQDdGfPB5vjBu-ads91XwCw8leH1mfTVLuY_n4oy7djACXsB"},
        { "mainAddress": "EQDKQJV0ntFAO0-WOBPDzhul5047RNwDtE7hCa_l7nxRiQ-E", "jettonAddress": "EQBAFnYZrfBHo2AkF0u-d89rTMzH-ZVTGFNKU55DjR_-pKAe"},
    ]
};

// Function to fetch wallet balance (remains the same)
async function getWalletBalance(address) {
    const response = await fetch('https://mainnet.tonhubapi.com/runGetMethod', {
        method: 'POST',
        body: JSON.stringify({
            address,
            method: 'get_wallet_data',
            stack: []
        })
    });
    const data = await response.json();
    const balanceHex = data.result.stack[0][1];
    return parseInt(balanceHex, 16); // Convert hex to decimal
}

async function createProgressBar(giver, balance, percentage, name, maxVolume) {
    const groupElement = document.createElement('div');
    groupElement.classList.add('wallet-group');

    const link = document.createElement('a');
    link.href = 'https://tonviewer.com/' + giver.mainAddress;
    link.classList.add('regular-text');
    link.classList.add('address')
    link.target = '_blank';

    var text = document.createElement('p');
    text.innerHTML = `${name}: ${balance.toLocaleString('en-US')}/${maxVolume.toLocaleString('en-US')} CHAPA<br>Mining progress: ${(100-percentage).toFixed(2)}%`;

    link.appendChild(text)
    groupElement.appendChild(link)
        
    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');

    const progressBarFill = document.createElement('div');
    progressBarFill.classList.add('progress-bar-fill');
    progressBarFill.style.width = `${percentage}%`;
    progressBar.appendChild(progressBarFill);

    groupElement.appendChild(progressBar);

    walletGroupsContainer.appendChild(groupElement);
}

async function createSeparator() {
    const div = document.createElement('div')
    const h2 = document.createElement('h2')
    h2.innerText = "ᅠ"
    div.appendChild(h2)
    walletGroupsContainer.appendChild(div)
}

// Function to create and display wallet groups
async function displayWalletGroups() {
    var summa= 0;
    var minedSumm = 0;

    createSeparator()

    for (let i = 0; i < givers.largeGivers.length; i++) {
        const giver = givers.largeGivers[i]
        const balance = await getWalletBalance(giver.jettonAddress) / 1000000000;
        const percentage = ((balance) / largeGiversMaxVolume) * 100;
        
        createProgressBar(giver, balance, percentage, "Large Giver #" + (i+1).toString(), largeGiversMaxVolume)

        summa += largeGiversMaxVolume;
        minedSumm+=balance;
    }

    createSeparator()
    for (let i = 0; i < givers.medium_givers.length; i++) {
        const giver = givers.medium_givers[i]
        const balance = await getWalletBalance(giver.jettonAddress) / 1000000000;
        const percentage = ((balance) / mediumGiversMaxVolume) * 100;
        
        createProgressBar(giver, balance, percentage, "Medium Giver #" + (i+1).toString(), mediumGiversMaxVolume)

        summa += mediumGiversMaxVolume;
        minedSumm+=balance;
    }
    createSeparator()
    for (let i = 0; i < givers.small_givers.length; i++) {
        const giver = givers.small_givers[i]
        const balance = await getWalletBalance(giver.jettonAddress) / 1000000000;
        const percentage = ((balance) / smallGiversMaxVolume) * 100;
        
        createProgressBar(giver, balance, percentage, "Small Giver #" + (i+1).toString(), smallGiversMaxVolume)

        summa += smallGiversMaxVolume;
        minedSumm+=balance;
    }
    createSeparator()
    for (let i = 0; i < givers.extra_small_givers.length; i++) {
        const giver = givers.extra_small_givers[i]
        const balance = await getWalletBalance(giver.jettonAddress) / 1000000000;
        const percentage = ((balance) / extraSmallGiversMaxVolume) * 100;
        
        createProgressBar(giver, balance, percentage, "Extra Small Giver #" + (i+1).toString(), extraSmallGiversMaxVolume)

        summa += extraSmallGiversMaxVolume;
        minedSumm+=balance;
    }
    sumarryBar.style.width = `${((minedSumm/summa)*100)}%`;
    summaryTextC.textContent = `Mining progress: ${(100 - (minedSumm/summa)*100).toFixed(2)}%`;
    summaryText.textContent = `Total Givers Balance: ${minedSumm.toLocaleString('en-US')}/${summa.toLocaleString('en-US')} CHAPA`;
}
// Function to handle theme switching (remains the same)
async function switchTheme(checkbox) {
    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme')
    } else {
        document.body.classList.add('dark-theme')
    }

}
const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
if (darkThemeMq.matches) {
    document.body.classList.add('dark-theme')
} else {
  // Theme set to light.
}

// Initial data fetching and display
displayWalletGroups();

