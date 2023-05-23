export const SONICSWAP_IDL =({ IDL }) => {
    const TxReceipt = IDL.Variant({ 'ok' : IDL.Nat, 'err' : IDL.Text });
    const TokenInfoExt = IDL.Record({
      'id' : IDL.Text,
      'fee' : IDL.Nat,
      'decimals' : IDL.Nat8,
      'name' : IDL.Text,
      'totalSupply' : IDL.Nat,
      'symbol' : IDL.Text,
    });
    const PairInfoExt = IDL.Record({
      'id' : IDL.Text,
      'price0CumulativeLast' : IDL.Nat,
      'creator' : IDL.Principal,
      'reserve0' : IDL.Nat,
      'reserve1' : IDL.Nat,
      'lptoken' : IDL.Text,
      'totalSupply' : IDL.Nat,
      'token0' : IDL.Text,
      'token1' : IDL.Text,
      'price1CumulativeLast' : IDL.Nat,
      'kLast' : IDL.Nat,
      'blockTimestampLast' : IDL.Int,
    });
    const Time = IDL.Int;
    const DepositSubAccounts = IDL.Record({
      'depositAId' : IDL.Text,
      'subaccount' : IDL.Vec(IDL.Nat8),
      'created_at' : Time,
      'transactionOwner' : IDL.Principal,
    });
    const TokenInfoWithType = IDL.Record({
      'id' : IDL.Text,
      'fee' : IDL.Nat,
      'decimals' : IDL.Nat8,
      'name' : IDL.Text,
      'totalSupply' : IDL.Nat,
      'tokenType' : IDL.Text,
      'symbol' : IDL.Text,
    });
    const SwapInfo = IDL.Record({
      'owner' : IDL.Principal,
      'cycles' : IDL.Nat,
      'tokens' : IDL.Vec(TokenInfoExt),
      'pairs' : IDL.Vec(PairInfoExt),
    });
    const TokenAnalyticsInfo = IDL.Record({
      'fee' : IDL.Nat,
      'decimals' : IDL.Nat8,
      'name' : IDL.Text,
      'totalSupply' : IDL.Nat,
      'symbol' : IDL.Text,
    });
    const UserInfo = IDL.Record({
      'lpBalances' : IDL.Vec(IDL.Tuple(IDL.Text, IDL.Nat)),
      'balances' : IDL.Vec(IDL.Tuple(IDL.Text, IDL.Nat)),
    });
    const UserInfoPage = IDL.Record({
      'lpBalances' : IDL.Tuple(IDL.Vec(IDL.Tuple(IDL.Text, IDL.Nat)), IDL.Nat),
      'balances' : IDL.Tuple(IDL.Vec(IDL.Tuple(IDL.Text, IDL.Nat)), IDL.Nat),
    });
    return IDL.Service({
      'addAuth' : IDL.Func([IDL.Principal], [IDL.Bool], []),
      'addLiquidity' : IDL.Func(
          [
            IDL.Principal,
            IDL.Principal,
            IDL.Nat,
            IDL.Nat,
            IDL.Nat,
            IDL.Nat,
            IDL.Int,
          ],
          [TxReceipt],
          [],
        ),
      'addToken' : IDL.Func([IDL.Principal, IDL.Text], [TxReceipt], []),
      'allowance' : IDL.Func(
          [IDL.Text, IDL.Principal, IDL.Principal],
          [IDL.Nat],
          ['query'],
        ),
      'approve' : IDL.Func([IDL.Text, IDL.Principal, IDL.Nat], [IDL.Bool], []),
      'balanceOf' : IDL.Func([IDL.Text, IDL.Principal], [IDL.Nat], ['query']),
      'burn' : IDL.Func([IDL.Text, IDL.Nat], [IDL.Bool], []),
      'createPair' : IDL.Func([IDL.Principal, IDL.Principal], [TxReceipt], []),
      'decimals' : IDL.Func([IDL.Text], [IDL.Nat8], ['query']),
      'deposit' : IDL.Func([IDL.Principal, IDL.Nat], [TxReceipt], []),
      'depositTo' : IDL.Func(
          [IDL.Principal, IDL.Principal, IDL.Nat],
          [TxReceipt],
          [],
        ),
      'exportBalances' : IDL.Func(
          [IDL.Text],
          [IDL.Opt(IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Nat)))],
          ['query'],
        ),
      'exportLPTokens' : IDL.Func([], [IDL.Vec(TokenInfoExt)], ['query']),
      'exportPairs' : IDL.Func([], [IDL.Vec(PairInfoExt)], ['query']),
      'exportSubAccounts' : IDL.Func(
          [],
          [IDL.Vec(IDL.Tuple(IDL.Principal, DepositSubAccounts))],
          [],
        ),
      'exportTokenTypes' : IDL.Func(
          [],
          [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text))],
          ['query'],
        ),
      'exportTokens' : IDL.Func([], [IDL.Vec(TokenInfoExt)], ['query']),
      'getAllPairs' : IDL.Func([], [IDL.Vec(PairInfoExt)], ['query']),
      'getBalance' : IDL.Func([IDL.Principal, IDL.Text], [IDL.Nat], []),
      'getHolders' : IDL.Func([IDL.Text], [IDL.Nat], ['query']),
      'getLPTokenId' : IDL.Func(
          [IDL.Principal, IDL.Principal],
          [IDL.Text],
          ['query'],
        ),
      'getNumPairs' : IDL.Func([], [IDL.Nat], ['query']),
      'getPair' : IDL.Func(
          [IDL.Principal, IDL.Principal],
          [IDL.Opt(PairInfoExt)],
          ['query'],
        ),
      'getPairs' : IDL.Func(
          [IDL.Nat, IDL.Nat],
          [IDL.Vec(PairInfoExt), IDL.Nat],
          ['query'],
        ),
      'getSupportedTokenList' : IDL.Func(
          [],
          [IDL.Vec(TokenInfoWithType)],
          ['query'],
        ),
      'getSupportedTokenListByName' : IDL.Func(
          [IDL.Text, IDL.Nat, IDL.Nat],
          [IDL.Vec(TokenInfoExt), IDL.Nat],
          ['query'],
        ),
      'getSupportedTokenListSome' : IDL.Func(
          [IDL.Nat, IDL.Nat],
          [IDL.Vec(TokenInfoExt), IDL.Nat],
          ['query'],
        ),
      'getSwapInfo' : IDL.Func([], [SwapInfo], ['query']),
      'getTokenMetadata' : IDL.Func([IDL.Text], [TokenAnalyticsInfo], ['query']),
      'getUserBalances' : IDL.Func(
          [IDL.Principal],
          [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Nat))],
          ['query'],
        ),
      'getUserInfo' : IDL.Func([IDL.Principal], [UserInfo], ['query']),
      'getUserInfoAbove' : IDL.Func(
          [IDL.Principal, IDL.Nat, IDL.Nat],
          [UserInfo],
          ['query'],
        ),
      'getUserInfoByNamePageAbove' : IDL.Func(
          [
            IDL.Principal,
            IDL.Int,
            IDL.Text,
            IDL.Nat,
            IDL.Nat,
            IDL.Int,
            IDL.Text,
            IDL.Nat,
            IDL.Nat,
          ],
          [UserInfoPage],
          ['query'],
        ),
      'getUserLPBalances' : IDL.Func(
          [IDL.Principal],
          [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Nat))],
          ['query'],
        ),
      'getUserLPBalancesAbove' : IDL.Func(
          [IDL.Principal, IDL.Nat],
          [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Nat))],
          ['query'],
        ),
      'historySize' : IDL.Func([], [IDL.Nat], []),
      'initateTransfer' : IDL.Func([], [IDL.Text], []),
      'initiateICRC1Transfer' : IDL.Func([], [IDL.Vec(IDL.Nat8)], []),
      'name' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
      'removeAuth' : IDL.Func([IDL.Principal], [IDL.Bool], []),
      'removeLiquidity' : IDL.Func(
          [
            IDL.Principal,
            IDL.Principal,
            IDL.Nat,
            IDL.Nat,
            IDL.Nat,
            IDL.Principal,
            IDL.Int,
          ],
          [TxReceipt],
          [],
        ),
      'setFeeForToken' : IDL.Func([IDL.Text, IDL.Nat], [IDL.Bool], []),
      'setFeeOn' : IDL.Func([IDL.Bool], [IDL.Bool], []),
      'setFeeTo' : IDL.Func([IDL.Principal], [IDL.Bool], []),
      'setGlobalTokenFee' : IDL.Func([IDL.Nat], [IDL.Bool], []),
      'setMaxTokens' : IDL.Func([IDL.Nat], [IDL.Bool], []),
      'setOwner' : IDL.Func([IDL.Principal], [IDL.Bool], []),
      'setPairSupply' : IDL.Func([IDL.Text, IDL.Nat], [IDL.Bool], []),
      'setPermissionless' : IDL.Func([IDL.Bool], [IDL.Bool], []),
      'swapExactTokensForTokens' : IDL.Func(
          [IDL.Nat, IDL.Nat, IDL.Vec(IDL.Text), IDL.Principal, IDL.Int],
          [TxReceipt],
          [],
        ),
      'swapTokensForExactTokens' : IDL.Func(
          [IDL.Nat, IDL.Nat, IDL.Vec(IDL.Text), IDL.Principal, IDL.Int],
          [TxReceipt],
          [],
        ),
      'symbol' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
      'totalSupply' : IDL.Func([IDL.Text], [IDL.Nat], ['query']),
      'transfer' : IDL.Func([IDL.Text, IDL.Principal, IDL.Nat], [IDL.Bool], []),
      'transferFrom' : IDL.Func(
          [IDL.Text, IDL.Principal, IDL.Principal, IDL.Nat],
          [IDL.Bool],
          [],
        ),
      'updateAllTokenMetadata' : IDL.Func([], [IDL.Bool], []),
      'updateTokenFees' : IDL.Func([], [IDL.Bool], []),
      'updateTokenMetadata' : IDL.Func([IDL.Text], [IDL.Bool], []),
      'withdraw' : IDL.Func([IDL.Principal, IDL.Nat], [TxReceipt], []),
      'withdrawTo' : IDL.Func(
          [IDL.Principal, IDL.Principal, IDL.Nat],
          [TxReceipt],
          [],
        ),
    });
  };
